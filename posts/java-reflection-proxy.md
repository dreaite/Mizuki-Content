---
title: 'java反射&代理面试知识'
published: 2024-01-24
updated: 2024-01-24
description: '反射是框架的核心，允许在运行时分析类和调用方法，广泛应用于Spring和MyBatis等框架。反射的优点在于灵活性，但也带来安全和性能问题。代理模式通过代理对象扩展目标对象功能，分为静态代理和动态代理。静态代理不灵活且难以维护，而动态代理则更灵活且常用于框架中。JDK动态代理和CGLIB动态代理各有优缺点，前者只能代理实现接口的类，后者可以代理未实现接口的类，但不能代理final类和方法。'
permalink: 'java-reflection-proxy'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/7e95c0d5-653c-4ab8-b721-c3dc5fdd5cc3/GEeyA1saEAAZXiT.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=f66e059c997d22fc12cc4e77b2d457347407fe92ad995735fcb66e201625824d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['java', 'doc', 'meeting']
category: 'cs-base'
draft: false
---

# java反射


## 何为反射？


如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。


反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。


通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。


## 反射的应用场景了解么？


像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。


但是，这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。


**这些框架中也大量使用了动态代理，而动态代理的实现也依赖反射。**


比如下面是通过 JDK 实现动态代理的示例代码，其中就使用了反射类 `Method` 来调用指定的方法。


```java
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * 代理类中的真实对象
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


另外，像 Java 中的一大利器 **注解** 的实现也用到了反射。


为什么你使用 Spring 的时候 ，一个`@Component`注解就声明了一个类为 Spring Bean 呢？为什么你通过一个 `@Value`注解就读取到配置文件中的值呢？究竟是怎么起作用的呢？


这些都是因为你可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。你获取到注解之后，就可以做进一步的处理。


## 谈谈反射机制的优缺点


**优点**：可以让咱们的代码更加灵活、为各种框架提供开箱即用的功能提供了便利


**缺点**：让我们在运行时有了分析操作类的能力，这同样也增加了安全问题。比如可以无视泛型参数的安全检查（泛型参数的安全检查发生在编译时）。另外，反射的性能也要稍差点，不过，对于框架来说实际是影响不大的。


## 反射实战


### 获取 Class 对象的四种方式


如果我们动态获取到这些信息，我们需要依靠 Class 对象。Class 类对象将一个类的方法、变量等信息告诉运行的程序。Java 提供了四种方式获取 Class 对象:

1. **知道具体类的情况下可以使用：**

    ```java
    Class alunbarClass = TargetObject.class;
    ```


    但是我们一般是不知道具体类的，基本都是通过遍历包下面的类来获取 Class 对象，通过此方式获取 Class 对象不会进行初始化

2. **通过** **`Class.forName()`****传入类的全路径获取：**

```java
Class alunbarClass1 = Class.forName("cn.javaguide.TargetObject");
```

1. **通过对象实例****`instance.getClass()`****获取：**

```java
TargetObject o = new TargetObject();
Class alunbarClass2 = o.getClass();
```

1. **通过类加载器****`xxxClassLoader.loadClass()`****传入类路径获取:**

    ```java
    ClassLoader.getSystemClassLoader().loadClass("cn.javaguide.TargetObject");
    ```


    通过类加载器获取 Class 对象不会进行初始化，意味着不进行包括初始化等一系列步骤，静态代码块和静态对象不会得到执行


### 反射的一些基本操作

1. 创建一个我们要使用反射操作的类 `TargetObject`。

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

2. 使用反射操作这个类的方法以及参数

    ```java
    package cn.javaguide;
    
    import java.lang.reflect.Field;
    import java.lang.reflect.InvocationTargetException;
    import java.lang.reflect.Method;
    
    public class Main {
        public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException, NoSuchFieldException {
            /**
             * 获取 TargetObject 类的 Class 对象并且创建 TargetObject 类实例
             */
            Class<?> targetClass = Class.forName("cn.javaguide.TargetObject");
            TargetObject targetObject = (TargetObject) targetClass.newInstance();
            /**
             * 获取 TargetObject 类中定义的所有方法
             */
            Method[] methods = targetClass.getDeclaredMethods();
            for (Method method : methods) {
                System.out.println(method.getName());
            }
    
            /**
             * 获取指定方法并调用
             */
            Method publicMethod = targetClass.getDeclaredMethod("publicMethod",
                    String.class);
    
            publicMethod.invoke(targetObject, "JavaGuide");
    
            /**
             * 获取指定参数并对参数进行修改
             */
            Field field = targetClass.getDeclaredField("value");
            //为了对类中的参数进行修改我们取消安全检查
            field.setAccessible(true);
            field.set(targetObject, "JavaGuide");
    
            /**
             * 调用 private 方法
             */
            Method privateMethod = targetClass.getDeclaredMethod("privateMethod");
            //为了调用private方法我们取消安全检查
            privateMethod.setAccessible(true);
            privateMethod.invoke(targetObject);
        }
    }
    ```


# java代理


## 代理模式


代理模式是一种比较好理解的设计模式。简单来说就是 **我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。**


**代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。**


代理模式有静态代理和动态代理两种实现方式


## 静态代理


**静态代理中，我们对目标对象的每个方法的增强都是手动完成的，非常不灵活（**_**比如接口一旦新增加方法，目标对象和代理对象都要进行修改**_**）且麻烦(**_**需要对每个目标类都单独写一个代理类**_**）。** 实际应用场景非常非常少，日常开发几乎看不到使用静态代理的场景。


上面我们是从实现和应用角度来说的静态代理，从 JVM 层面来说， **静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。**


静态代理实现步骤:

1. 定义一个接口及其实现类；
2. 创建一个代理类同样实现这个接口
3. 将目标对象注入进代理类，然后在代理类的对应方法调用目标类中的对应方法。这样的话，我们就可以通过代理类屏蔽对目标对象的访问，并且可以在目标方法执行前后做一些自己想做的事情。

下面通过代码展示！

1. **定义发送短信的接口**

    ```java
    public interface SmsService {
        String send(String message);
    }
    ```

2. **实现发送短信的接口**

    ```java
    public class SmsServiceImpl implements SmsService {
        public String send(String message) {
            System.out.println("send message:" + message);
            return message;
        }
    }
    ```

3. **创建代理类并同样实现发送短信的接口**

    ```java
    public class SmsProxy implements SmsService {
    
        private final SmsService smsService;
    
        public SmsProxy(SmsService smsService) {
            this.smsService = smsService;
        }
    
        @Override
        public String send(String message) {
            //调用方法之前，我们可以添加自己的操作
            System.out.println("before method send()");
            smsService.send(message);
            //调用方法之后，我们同样可以添加自己的操作
            System.out.println("after method send()");
            return null;
        }
    }
    ```

4. **实际使用**

    ```java
    public class Main {
        public static void main(String[] args) {
            SmsService smsService = new SmsServiceImpl();
            SmsProxy smsProxy = new SmsProxy(smsService);
            smsProxy.send("java");
        }
    }
    ```


运行上述代码之后，控制台打印出：


```plain text
before method send()
send message:java
after method send()
```


可以输出结果看出，我们已经增加了 `SmsServiceImpl` 的`send()`方法。


## 动态代理


相比于静态代理来说，动态代理更加灵活。我们不需要针对每个目标类都单独创建一个代理类，并且也不需要我们必须实现接口，我们可以直接代理实现类( _CGLIB 动态代理机制_)。


**从 JVM 角度来说，动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。**


说到动态代理，Spring AOP、RPC 框架应该是两个不得不提的，它们的实现都依赖了动态代理。


**动态代理在我们日常开发中使用的相对较少，但是在框架中的几乎是必用的一门技术。学会了动态代理之后，对于我们理解和学习各种框架的原理也非常有帮助。**


就 Java 来说，动态代理的实现方式有很多种，比如 **JDK 动态代理**、**CGLIB 动态代理**等等。


[guide-rpc-framework](https://github.com/Snailclimb/guide-rpc-framework) 使用的是 JDK 动态代理，我们先来看看 JDK 动态代理的使用。


另外，虽然 [guide-rpc-framework](https://github.com/Snailclimb/guide-rpc-framework) 没有用到 **CGLIB 动态代理** ，我们这里还是简单介绍一下其使用以及和**JDK 动态代理**的对比。


### JDK 动态代理机制


**在 Java 动态代理机制中** **`InvocationHandler`** **接口和** **`Proxy`** **类是核心。**


`Proxy` 类中使用频率最高的方法是：`newProxyInstance()` ，这个方法主要用来生成一个代理对象。


```java
public static Object newProxyInstance(ClassLoader loader,
                                          Class<?>[] interfaces,
                                          InvocationHandler h)
        throws IllegalArgumentException
    {
        ......
    }
```


这个方法一共有 3 个参数：

1. **loader** :类加载器，用于加载代理对象。
2. **interfaces** : 被代理类实现的一些接口；
3. **h** : 实现了 `InvocationHandler` 接口的对象；

要实现动态代理的话，还必须需要实现`InvocationHandler` 来自定义处理逻辑。 当我们的动态代理对象调用一个方法时，这个方法的调用就会被转发到实现`InvocationHandler` 接口类的 `invoke` 方法来调用。


```java
public interface InvocationHandler {

    /**
     * 当你使用代理对象调用方法的时候实际会调用到这个方法
     */
    public Object invoke(Object proxy, Method method, Object[] args)
        throws Throwable;
}
```


`invoke()` 方法有下面三个参数：

1. **proxy** :动态生成的代理类
2. **method** : 与代理类对象调用的方法相对应
3. **args** : 当前 method 方法的参数

也就是说：**你通过****`Proxy`** **类的** **`newProxyInstance()`** **创建的代理对象在调用方法的时候，实际会调用到实现****`InvocationHandler`** **接口的类的** **`invoke()`****方法。** 你可以在 `invoke()` 方法中自定义处理逻辑，比如在方法执行前后做什么事情。

- JDK 动态代理类使用步骤
    1. 定义一个接口及其实现类；
    2. 自定义 `InvocationHandler` 并重写`invoke`方法，在 `invoke` 方法中我们会调用原生方法（被代理类的方法）并自定义一些处理逻辑；
    3. 通过 `Proxy.newProxyInstance(ClassLoader loader,Class<?>[] interfaces,InvocationHandler h)` 方法创建代理对象；
- 代码示例
    1. **定义发送短信的接口**

        ```java
        public interface SmsService {
            String send(String message);
        }
        ```

    2. **实现发送短信的接口**

        ```java
        public class SmsServiceImpl implements SmsService {
            public String send(String message) {
                System.out.println("send message:" + message);
                return message;
            }
        }
        ```

    3. **定义一个 JDK 动态代理类**

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
             * 代理类中的真实对象
             */
            private final Object target;
        
            public DebugInvocationHandler(Object target) {
                this.target = target;
            }
        
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
                //调用方法之前，我们可以添加自己的操作
                System.out.println("before method " + method.getName());
                Object result = method.invoke(target, args);
                //调用方法之后，我们同样可以添加自己的操作
                System.out.println("after method " + method.getName());
                return result;
            }
        }
        ```


        `invoke()` 方法: 当我们的动态代理对象调用原生方法的时候，最终实际上调用到的是 `invoke()` 方法，然后 `invoke()` 方法代替我们去调用了被代理对象的原生方法。

    4. **获取代理对象的工厂类**

        ```java
        public class JdkProxyFactory {
            public static Object getProxy(Object target) {
                return Proxy.newProxyInstance(
                        target.getClass().getClassLoader(), // 目标类的类加载器
                        target.getClass().getInterfaces(),  // 代理需要实现的接口，可指定多个
                        new DebugInvocationHandler(target)   // 代理对象对应的自定义 InvocationHandler
                );
            }
        }
        ```


        `getProxy()`：主要通过`Proxy.newProxyInstance（）`方法获取某个类的代理对象

    5. **实际使用**

        ```java
        SmsService smsService = (SmsService) JdkProxyFactory.getProxy(new SmsServiceImpl());
        smsService.send("java");
        ```


    运行上述代码之后，控制台打印出：


    ```plain text
    before method send
    send message:java
    after method send
    ```


### CGLIB 动态代理机制


**JDK 动态代理有一个最致命的问题是其只能代理实现了接口的类。**


**为了解决这个问题，我们可以用 CGLIB 动态代理机制来避免。**


[CGLIB](https://github.com/cglib/cglib)(_Code Generation Library_)是一个基于[ASM](http://www.baeldung.com/java-asm)的字节码生成库，它允许我们在运行时对字节码进行修改和动态生成。CGLIB 通过继承方式实现代理。很多知名的开源框架都使用到了[CGLIB](https://github.com/cglib/cglib)， 例如 Spring 中的 AOP 模块中：如果目标对象实现了接口，则默认采用 JDK 动态代理，否则采用 CGLIB 动态代理。


**在 CGLIB 动态代理机制中** **`MethodInterceptor`** **接口和** **`Enhancer`** **类是核心。**


你需要自定义 `MethodInterceptor` 并重写 `intercept` 方法，`intercept` 用于拦截增强被代理类的方法。


```java
public interface MethodInterceptor
extends Callback{
    // 拦截被代理类中的方法
    public Object intercept(Object obj, java.lang.reflect.Method method, Object[] args,MethodProxy proxy) throws Throwable;
}
```

1. **obj** : 被代理的对象（需要增强的对象）
2. **method** : 被拦截的方法（需要增强的方法）
3. **args** : 方法入参
4. **proxy** : 用于调用原始方法

你可以通过 `Enhancer`类来动态获取被代理类，当代理类调用方法的时候，实际调用的是 `MethodInterceptor` 中的 `intercept` 方法。

- CGLIB 动态代理类使用步骤
    1. 定义一个类；
    2. 自定义 `MethodInterceptor` 并重写 `intercept` 方法，`intercept` 用于拦截增强被代理类的方法，和 JDK 动态代理中的 `invoke` 方法类似；
    3. 通过 `Enhancer` 类的 `create()`创建代理类；
- 代码示例

    不同于 JDK 动态代理不需要额外的依赖。[CGLIB](https://github.com/cglib/cglib)(_Code Generation Library_) 实际是属于一个开源项目，如果你要使用它的话，需要手动添加相关依赖。


    ```xml
    <dependency>
      <groupId>cglib</groupId>
      <artifactId>cglib</artifactId>
      <version>3.3.0</version>
    </dependency>
    ```

    1. **实现一个使用阿里云发送短信的类**

        ```java
        package github.javaguide.dynamicProxy.cglibDynamicProxy;
        
        public class AliSmsService {
            public String send(String message) {
                System.out.println("send message:" + message);
                return message;
            }
        }
        ```

    2. **自定义** **`MethodInterceptor`****（方法拦截器）**

        ```java
        import net.sf.cglib.proxy.MethodInterceptor;
        import net.sf.cglib.proxy.MethodProxy;
        
        import java.lang.reflect.Method;
        
        /**
         * 自定义MethodInterceptor
         */
        public class DebugMethodInterceptor implements MethodInterceptor {
        
            /**
             * @param o           被代理的对象（需要增强的对象）
             * @param method      被拦截的方法（需要增强的方法）
             * @param args        方法入参
             * @param methodProxy 用于调用原始方法
             */
            @Override
            public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
                //调用方法之前，我们可以添加自己的操作
                System.out.println("before method " + method.getName());
                Object object = methodProxy.invokeSuper(o, args);
                //调用方法之后，我们同样可以添加自己的操作
                System.out.println("after method " + method.getName());
                return object;
            }
        
        }
        ```

    3. **获取代理类**

        ```java
        import net.sf.cglib.proxy.Enhancer;
        
        public class CglibProxyFactory {
        
            public static Object getProxy(Class<?> clazz) {
                // 创建动态代理增强类
                Enhancer enhancer = new Enhancer();
                // 设置类加载器
                enhancer.setClassLoader(clazz.getClassLoader());
                // 设置被代理类
                enhancer.setSuperclass(clazz);
                // 设置方法拦截器
                enhancer.setCallback(new DebugMethodInterceptor());
                // 创建代理类
                return enhancer.create();
            }
        }
        ```

    4. **实际使用**

        ```java
        AliSmsService aliSmsService = (AliSmsService) CglibProxyFactory.getProxy(AliSmsService.class);
        aliSmsService.send("java");
        ```


    运行上述代码之后，控制台打印出：


    ```plain text
    before method send
    send message:java
    after method send
    ```


### JDK 动态代理和 CGLIB 动态代理对比

1. **JDK 动态代理只能代理实现了接口的类或者直接代理接口，而 CGLIB 可以代理未实现任何接口的类。** 另外， CGLIB 动态代理是通过生成一个被代理类的子类来拦截被代理类的方法调用，因此**不能代理声明为 final 类型的类和方法**。
2. 就二者的效率来说，大部分情况都是 JDK 动态代理更优秀，随着 JDK 版本的升级，这个优势更加明显。

## 静态代理和动态代理的对比

1. **灵活性**：动态代理更加灵活，不需要必须实现接口，可以直接代理实现类，并且可以不需要针对每个目标类都创建一个代理类。另外，静态代理中，接口一旦新增加方法，目标对象和代理对象都要进行修改，这是非常麻烦的！
2. **JVM 层面**：静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。而动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。
