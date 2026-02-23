---
title: 'Java Reflection & Proxy Interview Notes'
published: 2024-01-24
updated: 2024-01-24
description: 'Reflection is a core mechanism used by frameworks, allowing runtime class analysis and method invocation, and is widely used in frameworks such as Spring. Its advantage is flexibility, but it can also introduce security risks and performance overhead. The proxy pattern extends target object functionality through proxy objects and is divided into static and dynamic proxies, with dynamic proxies being more flexible and commonly used in frameworks. JDK dynamic proxies can only proxy classes that implement interfaces, while CGLIB can proxy classes without interfaces. Dynamic proxies generate bytecode at runtime and provide higher flexibility and efficiency.'
image: 'https://r2.dreaife.tokyo/notion/covers/3af5ee50a878452480834882821fda23/GEeyA1saEAAZXiT.jpg'
tags: ['java', 'doc', 'meeting']
category: 'cs-base'
draft: false
lang: 'en'
---

# Java Reflection

## What is Reflection?

If you have studied the underlying principles of frameworks or you've written your own frameworks, you are surely familiar with the concept of reflection.

Reflection is often called the soul of a framework mainly because it enables us to analyze classes at runtime and invoke methods within those classes.

Through reflection you can obtain all the fields and methods of any class, and you can also call these methods and access these fields.

## Do you know the use cases for reflection?

Most of the time we are writing business code and rarely encounter scenarios that directly use reflection.

However, this doesn’t mean reflection is useless. On the contrary, it’s because of reflection that you can use various frameworks so easily. Frameworks like Spring/Spring Boot, MyBatis, and others make extensive use of reflection.

**These frameworks also heavily use dynamic proxies, and the implementation of dynamic proxies relies on reflection.**

For example, the following is a sample code that implements dynamic proxy using the JDK, which uses the reflection class `Method` to invoke a specified method.

```java
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * The real object inside the proxy
     */
    private final Object target;

    public DebugInvocationHandler(Object target) {
        this.target = target;
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        System.out.println("before method " + method.getName());
        Object result = method.invoke(target, args);
        System.out.println("after method " + method.getName());
        return result;
    }
}
```

In addition, the implementation of Java annotations, a powerful feature, also uses reflection.

Why when you use Spring, an @Component annotation declares a class as a Spring Bean? Why can you read a value from the configuration file with an @Value annotation? How does this actually work?

All of these are because you can analyze classes using reflection and then obtain annotations on classes/fields/methods/method parameters. After you obtain the annotations, you can do further processing.

## Pros and cons of the reflection mechanism

**Pros**: It makes our code more flexible and provides convenience for turning various frameworks into plug-and-play functionality.

**Cons**: It gives us the ability to analyze classes at runtime, which also increases security concerns. For example, it can bypass the safety checks of generic parameters (the safety checks for generic parameters occur at compile time). Also, reflection’s performance is somewhat slower, but for frameworks, the impact is not significant.

## Reflection in practice

### Four ways to obtain a Class object

If we want to obtain this information dynamically, we need to rely on the Class object. The Class object provides information about a class’s methods, variables, etc. Java provides four ways to obtain a Class object:

1. **If you know the concrete class, you can use:**

    ```java
    Class alunbarClass = TargetObject.class;
    ```

    However, we generally don’t know the concrete class; we usually obtain the Class object by iterating over the classes under a package. Obtaining the Class object this way will not initialize the class.

2. **Through `Class.forName()` to obtain by fully-qualified name:**

```java
Class alunbarClass1 = Class.forName("cn.javaguide.TargetObject");
```

1. **Through an object instance `instance.getClass()` to obtain:**

```java
TargetObject o = new TargetObject();
Class alunbarClass2 = o.getClass();
```

1. **Through a class loader `xxxClassLoader.loadClass()` to obtain by path:**

```java
ClassLoader.getSystemClassLoader().loadClass("cn.javaguide.TargetObject");
```

Obtaining a Class object via a class loader does not initialize the class, which means a series of steps including initialization are not performed; static blocks and static objects will not be executed.

### Some basic operations of reflection

1. Create a class that we will operate on with reflection, `TargetObject`.

```java
package cn.javaguide;

public class TargetObject {
    private String value;

    public TargetObject() {
        value = "JavaGuide";
    }

    public void publicMethod(String s) {
        System.out.println("I love " + s);
    }

    private void privateMethod() {
        System.out.println("value is " + value);
    }
}
```

2. Use reflection to operate on this class’s methods and parameters

```java
package cn.javaguide;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Main {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException, NoSuchFieldException {
        /**
         * Get the Class object of the TargetObject class and create an instance of TargetObject
         */
        Class<?> targetClass = Class.forName("cn.javaguide.TargetObject");
        TargetObject targetObject = (TargetObject) targetClass.newInstance();
        /**
         * Get all methods defined in TargetObject
         */
        Method[] methods = targetClass.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method.getName());
        }

        /**
         * Get a specific method and call it
         */
        Method publicMethod = targetClass.getDeclaredMethod("publicMethod",
                String.class);

        publicMethod.invoke(targetObject, "JavaGuide");

        /**
         * Get a specific parameter and modify it
         */
        Field field = targetClass.getDeclaredField("value");
        //To modify the field's value, disable the security check
        field.setAccessible(true);
        field.set(targetObject, "JavaGuide");

        /**
         * Call a private method
         */
        Method privateMethod = targetClass.getDeclaredMethod("privateMethod");
        //To call a private method, disable the security check
        privateMethod.setAccessible(true);
        privateMethod.invoke(targetObject);
    }
}
```


# Java Proxies

## Proxy Pattern

The proxy pattern is a design pattern that is relatively easy to understand. In simple terms, we use a proxy object to replace access to the real object, so we can provide additional functionality without modifying the original target object, thereby extending the target object's capabilities.

**The main purpose of the proxy pattern is to extend the target object's functionality, for example by adding some customized operations before or after a method of the target object executes.**

There are two implementations of the proxy pattern: static proxy and dynamic proxy.

## Static Proxy

**In static proxy, enhancing each method of the target object is done manually, which is very inflexible (for example, if the interface adds a new method, both the target object and the proxy object must be modified) and cumbersome (you need to write a proxy class for each target class).** The actual usage scenarios are very, very rare; static proxies are almost never seen in daily development.

From the JVM perspective, static proxy, at compile time, converts interfaces, implementation classes, and proxy classes into actual class files.

Static proxy steps:

1. Define an interface and its implementation class;
2. Create a proxy class that also implements this interface
3. Inject the target object into the proxy class, and then in the proxy class call the corresponding method in the target class. This way, we can shield access to the target object through the proxy class and perform some actions before and after the target method executes.

Now, let’s show it with code!

1. **Define the Sms sending interface**

    ```java
    public interface SmsService {
        String send(String message);
    }
    ```

2. **Implement the Sms sending interface**

    ```java
    public class SmsServiceImpl implements SmsService {
        public String send(String message) {
            System.out.println("send message:" + message);
            return message;
        }
    }
    ```

3. **Create a proxy class that also implements the SmsService interface**

    ```java
    public class SmsProxy implements SmsService {

        private final SmsService smsService;

        public SmsProxy(SmsService smsService) {
            this.smsService = smsService;
        }

        @Override
        public String send(String message) {
            // Before invoking, we can add our own operations
            System.out.println("before method send()");
            smsService.send(message);
            // After invoking, we can also add our own operations
            System.out.println("after method send()");
            return null;
        }
    }
    ```

4. **Usage**

    ```java
    public class Main {
        public static void main(String[] args) {
            SmsService smsService = new SmsServiceImpl();
            SmsProxy smsProxy = new SmsProxy(smsService);
            smsProxy.send("java");
        }
    }
    ```

After running the above code, the console prints:

```plain text
before method send()
send message:java
after method send()
```

From the output, you can see that we have added the `send()` method of `SmsServiceImpl`.

## Dynamic Proxy

Compared with static proxies, dynamic proxies are more flexible. We don’t need to create a separate proxy class for every target class, and we don’t need to implement an interface; we can proxy the implementation class directly (the CGLIB dynamic proxy mechanism).

**From the JVM’s perspective, dynamic proxies are generated at runtime, and the bytecode is loaded into the JVM.**

When talking about dynamic proxies, Spring AOP and RPC frameworks are two indispensable references; their implementations rely on dynamic proxies.

**Dynamic proxies are used less in daily development, but in frameworks they are almost indispensable. Once you master dynamic proxies, it will help you understand and learn the principles behind various frameworks.**

In Java, there are many ways to implement dynamic proxies, such as **JDK dynamic proxies** and **CGLIB dynamic proxies**, etc.

[guide-rpc-framework](https://github.com/Snailclimb/guide-rpc-framework) uses JDK dynamic proxies; let’s first look at the usage of JDK dynamic proxies.

In addition, although [guide-rpc-framework](https://github.com/Snailclimb/guide-rpc-framework) does not use **CGLIB dynamic proxies**, here we still briefly introduce its usage and compare with **JDK dynamic proxies**.

### JDK Dynamic Proxy Mechanism

**In the Java dynamic proxy mechanism, the** `InvocationHandler` **interface and the** `Proxy` **class are core.**

The most frequently used method in the `Proxy` class is: `newProxyInstance()`, which is mainly used to generate a proxy object.

```java
public static Object newProxyInstance(ClassLoader loader,
                                      Class<?>[] interfaces,
                                      InvocationHandler h)
        throws IllegalArgumentException
    {
        ......
    }
```

This method has three parameters:

1. **loader** : the class loader used to load the proxy object.
2. **interfaces** : the interfaces implemented by the proxied class;
3. **h** : the object that implements the `InvocationHandler` interface;

To implement dynamic proxies, you must also implement `InvocationHandler` to customize the handling logic. When our dynamic proxy object calls a method, that call will be forwarded to the `invoke` method of the class implementing the `InvocationHandler` interface.

```java
public interface InvocationHandler {

    /**
     * When you call a method on the proxy object, this method is actually invoked
     */
    public Object invoke(Object proxy, Method method, Object[] args)
        throws Throwable;
}
```

`invoke()` method has three parameters:

1. **proxy** : the dynamically generated proxy class
2. **method** : the method being invoked on the proxy object
3. **args** : the parameters of the current method

In other words: the proxy object created by the `Proxy` class's `newProxyInstance()` will actually call the `invoke()` method of the class that implements `InvocationHandler` when a method is invoked. You can customize the handling logic in the `invoke()` method, such as what to do before or after the method execution.

- JDK dynamic proxy usage steps
    1. Define an interface and its implementation class;
    2. Create a custom `InvocationHandler` and override the `invoke` method; in the `invoke` method we will call the native method (the method of the proxied class) and add some custom processing;
    3. Create the proxy object via `Proxy.newProxyInstance(ClassLoader loader,Class<?>[] interfaces,InvocationHandler h)`;
- Code example
    1. **Define the Sms sending interface**

        ```java
        public interface SmsService {
            String send(String message);
        }
        ```

    2. **Implement the Sms sending interface**

        ```java
        public class SmsServiceImpl implements SmsService {
            public String send(String message) {
                System.out.println("send message:" + message);
                return message;
            }
        }
        ```

    3. **Define a JDK dynamic proxy class**

        ```java
        import java.lang.reflect.InvocationHandler;
        import java.lang.reflect.InvocationTargetException;
        import java.lang.reflect.Method;
        
        /**
         * @author shuang.kou
         * @createTime 2020年05月11日 11:23:00
         */
        public class DebugInvocationHandler implements InvocationHandler {
            /**
             * The real object inside the proxy
             */
            private final Object target;
        
            public DebugInvocationHandler(Object target) {
                this.target = target;
            }
        
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
                // Before invoking, we can add our own operations
                System.out.println("before method " + method.getName());
                Object result = method.invoke(target, args);
                // After invoking, we can also add our own operations
                System.out.println("after method " + method.getName());
                return result;
            }
        }
        ```


        The `invoke()` method: when our dynamic proxy object calls a native method, what is ultimately called is the `invoke()` method, and then the `invoke()` method handles calling the proxied object’s native method.

    4. **Factory class to obtain proxy objects**

        ```java
        public class JdkProxyFactory {
            public static Object getProxy(Object target) {
                return Proxy.newProxyInstance(
                        target.getClass().getClassLoader(), // target class's class loader
                        target.getClass().getInterfaces(),  // interfaces to implement by the proxy, can specify multiple
                        new DebugInvocationHandler(target)   // the custom InvocationHandler for the proxy object
                );
            }
        }
        ```


        `getProxy()` mainly uses `Proxy.newProxyInstance()` to obtain a proxy object for a class.

    5. **Usage**

        ```java
        SmsService smsService = (SmsService) JdkProxyFactory.getProxy(new SmsServiceImpl());
        smsService.send("java");
        ```


    After running the above code, the console prints:

    ```plain text
    before method send
    send message:java
    after method send
    ```


### CGLIB Dynamic Proxy Mechanism

**One of the most critical limitations of JDK dynamic proxies is that they can only proxy classes that implement interfaces.**

**To solve this, you can use CGLIB dynamic proxy to avoid this limitation.**

[CGLIB](https://github.com/cglib/cglib)(_Code Generation Library_) is a bytecode generation library based on ASM that allows us to modify and dynamically generate bytecode at runtime. CGLIB proxies by inheritance. Many well-known open-source frameworks use [CGLIB](https://github.com/cglib/cglib), for example in Spring's AOP module: if the target object implements an interface, the default is to use a JDK dynamic proxy; otherwise, CGLIB dynamic proxy is used.

**In the CGLIB dynamic proxy mechanism** **`MethodInterceptor`** **interface and** **`Enhancer`** **class are core.**

You need to customize a `MethodInterceptor` and override the `intercept` method; `intercept` is used to intercept and enhance the proxied class’s methods.

```java
public interface MethodInterceptor
extends Callback{
    // Intercept methods in the proxied class
    public Object intercept(Object obj, java.lang.reflect.Method method, Object[] args,MethodProxy proxy) throws Throwable;
}
```

1. **obj** : the proxied object (the object to be enhanced)
2. **method** : the intercepted method (the method to be enhanced)
3. **args** : method parameters
4. **proxy** : used to call the original method

You can dynamically obtain the proxied class via the `Enhancer` class; when the proxy class calls a method, the actual call goes to the `intercept` method in the `MethodInterceptor`.

- CGLIB dynamic proxy usage steps
    1. Define a class;
    2. Create a custom `MethodInterceptor` and override the `intercept` method; `intercept` is used to intercept and enhance the proxied class’s methods, similar to the `invoke` method in JDK dynamic proxies;
    3. Use the `Enhancer` class’s `create()` to create the proxy class;
- Code example

    Unlike JDK dynamic proxy, no extra dependency is required. [CGLIB](https://github.com/cglib/cglib)(_Code Generation Library_) is actually an open-source project; if you want to use it, you need to manually add the related dependency.


    ```xml
    <dependency>
      <groupId>cglib</groupId>
      <artifactId>cglib</artifactId>
      <version>3.3.0</version>
    </dependency>
    ```

    1. **Implement a class that uses Alibaba Cloud to send SMS**

        ```java
        package github.javaguide.dynamicProxy.cglibDynamicProxy;
        
        public class AliSmsService {
            public String send(String message) {
                System.out.println("send message:" + message);
                return message;
            }
        }
        ```

    2. **Create a custom**  `MethodInterceptor`** (method interceptor)**

        ```java
        import net.sf.cglib.proxy.MethodInterceptor;
        import net.sf.cglib.proxy.MethodProxy;
        
        import java.lang.reflect.Method;
        
        /**
         * Custom MethodInterceptor
         */
        public class DebugMethodInterceptor implements MethodInterceptor {
        
            /**
             * @param o           the proxied object (the object to be enhanced)
             * @param method      the intercepted method (the method to be enhanced)
             * @param args        method arguments
             * @param methodProxy used to call the original method
             */
            @Override
            public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
                // Before invoking, we can add our own operations
                System.out.println("before method " + method.getName());
                Object object = methodProxy.invokeSuper(o, args);
                // After invoking, we can also add our own operations
                System.out.println("after method " + method.getName());
                return object;
            }
        
        }
        ```

    3. **Get the proxy class**

        ```java
        import net.sf.cglib.proxy.Enhancer;
        
        public class CglibProxyFactory {
        
            public static Object getProxy(Class<?> clazz) {
                // Create dynamic proxy enhancement class
                Enhancer enhancer = new Enhancer();
                // Set the class loader
                enhancer.setClassLoader(clazz.getClassLoader());
                // Set the proxied class
                enhancer.setSuperclass(clazz);
                // Set the method interceptor
                enhancer.setCallback(new DebugMethodInterceptor());
                // Create the proxy class
                return enhancer.create();
            }
        }
        ```

    4. **Usage**

        ```java
        AliSmsService aliSmsService = (AliSmsService) CglibProxyFactory.getProxy(AliSmsService.class);
        aliSmsService.send("java");
        ```


    After running the above code, the console prints:

    ```plain text
    before method send
    send message:java
    after method send
    ```


### JDK Dynamic Proxy vs CGLIB Dynamic Proxy

1. **JDK dynamic proxies can only proxy classes that implement interfaces, whereas CGLIB can proxy classes that do not implement any interfaces.** Additionally, CGLIB proxies by generating a subclass of the proxied class, so it cannot proxy final classes and final methods.
2. In terms of efficiency, in most cases JDK dynamic proxies are better; with newer JDK versions, this advantage becomes more pronounced.

## Static Proxy vs Dynamic Proxy

1. **Flexibility**：Dynamic proxies are more flexible; you don’t need to necessarily implement an interface, you can proxy the implementation class directly, and you don’t need to create a proxy class for every target class. Also, with static proxies, if a new method is added to the interface, both the target object and the proxy object must be modified—that’s very troublesome!
2. **JVM level**：Static proxies convert the interfaces, implementations, and proxies into actual class files at compile time. Dynamic proxies generate bytecode at runtime and load it into the JVM.