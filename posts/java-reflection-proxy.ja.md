---
title: 'java反射&代理面试知识'
published: 2024-01-24
updated: 2024-01-24
description: '反射是框架的核心，允许在运行时分析类和调用方法，广泛应用于Spring等框架。反射的优点是灵活性高，但可能带来安全问题和性能损失。代理模式通过代理对象扩展目标对象功能，分为静态代理和动态代理，后者更为灵活且常用于框架中。JDK动态代理只能代理实现接口的类，而CGLIB可以代理未实现接口的类。动态代理在运行时生成字节码，提供更高的灵活性和效率。'
permalink: 'java-reflection-proxy.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/3af5ee50a878452480834882821fda23/GEeyA1saEAAZXiT.jpg'
tags: ['java', 'doc', 'meeting']
category: 'cs-base'
draft: false
lang: 'ja'
---

# Javaリフレクション

## リフレクションとは？

フレームワークの仕組みの底層原理を研究したことがある人、あるいは自分たちでフレームワークを作ったことがある人は、リフレクションという概念に馴染みがあるはずです。

リフレクションがフレームワークの魂と呼ばれる理由は、実行時にクラスを分析し、クラス内のメソッドを実行する能力を私たちに与えるからです。

リフレクションを通じて、任意のクラスのすべての属性とメソッドを取得でき、これらのメソッドや属性を呼び出すこともできます。

## リフレクションの適用シーンを知っていますか？

私たちは普段ビジネスコードの作成を主に行い、直接リフレクション機構を使用する場面に触れることは少ないです。

しかし、これはリフレクションが役に立たないという意味ではありません。むしろリフレクションのおかげで、さまざまなフレームワークをこのように容易に利用できます。Spring/Spring Boot、MyBatis などのフレームワークはリフレクションを大量に使用しています。

**これらのフレームワークではダイナミックプロキシも大量に用いられており、ダイナミックプロキシの実現にはリフレクションが依存しています。**

以下はJDKを用いて動的プロキシを実装したサンプルコードで、その中でリフレクションクラスの `Method` を使って指定したメソッドを呼び出しています。

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


另外、Java の大きな武器である **アノテーション** の実装もリフレクションを用いています。


なぜ Spring を使うとき、1つの `@Component` アノテーションだけでクラスを Spring Bean に宣言できるのでしょうか。なぜ 1つの `@Value` アノテーションで設定ファイルの値を読み取れるのでしょうか。結局どう作用しているのでしょうか？


これらはすべて、リフレクションを基にクラスを分析し、クラス/属性/メソッド/メソッドのパラメータ上的な注釈を取得できるためです。注釈を取得したら、さらに処理を行うことができます。

## リフレクション機構の長所と短所

**長所**：私たちのコードをより柔軟にし、さまざまなフレームワークに対してすぐに使える機能を提供する利便さ。

**短所**：実行時にクラスを分析する能力を得る一方で、セキュリティ上の問題が増える可能性があります。例えば、ジェネリックパラメータの安全性チェックを回避できてしまうことです（ジェネリックの安全性チェックはコンパイル時に行われます）。また、リフレクションのパフォーマンスはやや低下しますが、フレームワークにとっては実際には大きな影響はありません。

## リフレクション実戦

### Class オブジェクトを取得する4つの方法

これらの情報を動的に取得するには Class オブジェクトに依存します。Classオブジェクトはクラスのメソッドや変数などの情報を実行時のプログラムに伝えます。Java には Class オブジェクトを取得する4つの方法が用意されています：

1. **具体的なクラスが分かっている場合に使用：**

    ```java
    Class alunbarClass = TargetObject.class;
    ```

    ただし私たちは通常、具体的なクラスが分からないので、パッケージ内のクラスを走査してClassオブジェクトを取得します。この方法で取得したClassオブジェクトは初期化を行いません。

2. **`Class.forName()` を用いて、クラスの全パスを渡して取得：**

```java
Class alunbarClass1 = Class.forName("cn.javaguide.TargetObject");
```

1. **オブジェクトのインスタンスから取得：`instance.getClass()`**

```java
TargetObject o = new TargetObject();
Class alunbarClass2 = o.getClass();
```

1. **クラスローダーを介して** `xxxClassLoader.loadClass()` **を用いてクラスパスを渡して取得：**

```java
ClassLoader.getSystemClassLoader().loadClass("cn.javaguide.TargetObject");
```

クラスローダーを介して Class オブジェクトを取得しても初期化は行われません。つまり初期化を含む一連の手順は実行されず、静的コードブロックや静的オブジェクトは実行されません。

### リフレクションの基本操作

1. リフレクションで操作する対象のクラス `TargetObject` を作成します。

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

2. このクラスのメソッドとパラメータをリフレクションで操作する

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


# Javaプロキシ

## プロキシパターン

プロキシパターンは理解しやすいデザインパターンの一つです。簡単に言えば、**私たちは代理オブジェクトを用いて実オブジェクト(real object)へのアクセスを代替し、元のターゲットオブジェクトを変更することなく、追加機能を提供し、ターゲットオブジェクトの機能を拡張します。**

**プロキシパターンの主な作用はターゲットオブジェクトの機能を拡張することです。例えば、ターゲットオブジェクトの某メソッドの前後に自分の処理を追加することができます。**

プロキシパターンには静的プロキシと動的プロキシの2種類の実装方法があります。

## 静的プロキシ

**静的プロキシでは、ターゲットオブジェクトの各メソッドの拡張は手動で行われるため非常に柔軟性に欠けます（例えば、インターフェースに新しいメソッドが追加されると、ターゲットオブジェクトと代理オブジェクトの両方を修正する必要があります）し、煩雑です（各ターゲットクラスごとに代理クラスを個別に作成する必要があります）。** 実際の適用シーンは非常に少なく、日常の開発では静的プロキシの場面はほとんど見られません。

上記は実装と適用の観点からの静的プロキシについて述べています。JVMレベルで見ると、**静的プロキシはコンパイル時にインターフェース、実装クラス、代理クラスなどをすべて実際のクラスファイルに変換します。**

静的プロキシの実装手順:

1. 定義一个インタフェースとその実装クラス；
2. 代理クラスを作成して同じインタフェースを実装する
3. 目標オブジェクトを代理クラスに注入し、代理クラスの対応メソッドからターゲットクラスの対応メソッドを呼び出す。こうすることで代理クラスを介してターゲットオブジェクトへのアクセスを遮断し、ターゲットメソッドの実行前後に自分のしたいことを実行できます。

以下はコードで示します！

1. **SMS送信インターフェースを定義**

```java
public interface SmsService {
    String send(String message);
}
```

2. **SMS送信インターフェースを実装**

```java
public class SmsServiceImpl implements SmsService {
    public String send(String message) {
        System.out.println("send message:" + message);
        return message;
    }
}
```

3. **代理クラスを作成し、同じくSMS送信インターフェースを実装**

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


运行上述コードを実行すると、コンソールには次のように表示されます：


```plain text
before method send()
send message:java
after method send()
```


結果から、私たちはすでに `SmsServiceImpl` の `send()` メソッドを追加したことが分かります。

## 動的プロキシ

静的プロキシと比較して、動的プロキシはより柔軟です。各ターゲットクラスごとに代理クラスを個別に作成する必要がなく、インターフェースを実装することを必須とせず、実装クラスを直接代理できます（CGLIB 動的プロキシ機構）。

**JVM の観点から見ると、動的プロキシは実行時にクラスのバイトコードを動的に生成し、JVM にロードします。**

動的プロキシといえば、Spring AOP、RPC フレームワークは2つとも必ず挙げるべき例です。実装はどちらも動的プロキシに依存しています。

**日常の開発で動的プロキシを使う場面はそれほど多くありませんが、フレームワークではほぼ必須の技術です。動的プロキシを習得すると、さまざまなフレームワークの原理を理解し学ぶ際にも非常に役立ちます。**

Java には動的プロキシの実装方法がいくつかあり、例えば **JDK 動的プロキシ**、**CGLIB 動的プロキシ** などがあります。

[guide-rpc-framework](https://github.com/Snailclimb/guide-rpc-framework) は JDK 動的プロキシを使用しています。まずは JDK 動的プロキシの使い方を見てみましょう。

また、[guide-rpc-framework](https://github.com/Snailclimb/guide-rpc-framework) は **CGLIB 動的プロキシ** を使っていませんが、ここではその使用方法と**JDK 動的プロキシ**との比較を簡単に紹介します。

### JDK 動的プロキシ機構

**Java の動的プロキシ機構では** `InvocationHandler` **インターフェースと** `Proxy` **クラスがコアです。**

`Proxy` クラスで最も頻繁に使われるメソッドは：`newProxyInstance()` で、このメソッドは主に代理オブジェクトを生成します。

```java
public static Object newProxyInstance(ClassLoader loader,
                                          Class<?>[] interfaces,
                                          InvocationHandler h)
        throws IllegalArgumentException
    {
        ......
    }
```


このメソッドは3つのパラメータがあります：

1. **loader** :クラスローダー。代理オブジェクトをロードします。
2. **interfaces** : 代理されるクラスが実装するいくつかのインターフェース；
3. **h** : `InvocationHandler` インターフェースを実装したオブジェクト；

動的プロキシを実現するには、`InvocationHandler` を実装して独自の処理ロジックを定義する必要があります。動的プロキシのオブジェクトがメソッドを呼び出すと、その呼び出しは実装された `InvocationHandler` の `invoke` メソッドへ転送されて呼び出されます。

```java
public interface InvocationHandler {

    /**
     * 当你使用代理对象调用方法的时候实际会调用到这个方法
     */
    public Object invoke(Object proxy, Method method, Object[] args)
        throws Throwable;
}
```


`invoke()` メソッドには以下の3つのパラメータがあります：

1. **proxy** :動的に生成されたプロキシクラス
2. **method** : プロキシクラスのオブジェクトが呼び出すメソッドに対応
3. **args** : 現在の method のパラメータ

つまり：**あなたが `Proxy` クラスの `newProxyInstance()` で作成した代理オブジェクトがメソッドを呼び出すとき、実際には `InvocationHandler` を実装したクラスの `invoke()` メソッドが呼び出されます。`invoke()` メソッド内で処理をカスタマイズできます。例えばメソッドの実行前後に何をするか。**

- JDK 動的プロキシクラスの使用手順
    1. インターフェースとその実装クラスを定義する；
    2. カスタム `InvocationHandler` を定義し、`invoke` メソッドをオーバーライドします。`invoke` メソッド内で元のメソッド（被代理クラスのメソッド）を呼び出して、独自の処理を追加します；
    3. `Proxy.newProxyInstance(ClassLoader loader,Class<?>[] interfaces,InvocationHandler h)` メソッドで代理オブジェクトを作成します；
- コード例
    1. **SMS送信のインターフェースを定義**

        ```java
        public interface SmsService {
            String send(String message);
        }
        ```

    2. **SMS送信のインターフェースを実装**

        ```java
        public class SmsServiceImpl implements SmsService {
            public String send(String message) {
                System.out.println("send message:" + message);
                return message;
            }
        }
        ```

    3. **JDK 動的プロキシクラスを定義**

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


        `invoke()` メソッド: 動的プロキシオブジェクトが元のメソッドを呼び出すと、最終的に `invoke()` メソッドが呼び出され、`invoke()` が代理対象の元のメソッドを呼び出します。

    4. **代理オブジェクトのファクトリークラスを取得**

        ```java
        public class JdkProxyFactory {
            public static Object getProxy(Object target) {
                return Proxy.newProxyInstance(
                        target.getClass().getClassLoader(), // 目標クラスのクラスローダー
                        target.getClass().getInterfaces(),  // 代理が実装するインターフェース、複数指定可能
                        new DebugInvocationHandler(target)   // 代理オブジェクトに対応するカスタム InvocationHandler
                );
            }
        }
        ```


        `getProxy()`：主に `Proxy.newProxyInstance（）` メソッドによって特定のクラスの代理オブジェクトを取得します。

    5. **実際の使用**

        ```java
        SmsService smsService = (SmsService) JdkProxyFactory.getProxy(new SmsServiceImpl());
        smsService.send("java");
        ```


    実行すると、コンソールには次のように表示されます：


    ```plain text
    before method send
    send message:java
    after method send
    ```


### CGLIB 動的プロキシ機構

**JDK 動的プロキシには最も致命的な問題があり、それはインターフェースを実装したクラスのみを代理できることです。**

**この問題を解決するために、CGLIB動的プロキシ機構を用いて回避することができます。**

[CGLIB](https://github.com/cglib/cglib)(_Code Generation Library_)は、ASM に基づくバイトコード生成ライブラリで、実行時にバイトコードを変更したり動的生成したりすることを可能にします。CGLIB は継承によって代理を実現します。多くの有名なオープンソースフレームワークが CGLIB を使用しています。例えば Spring の AOP モジュールでは、ターゲットオブジェクトがインターフェースを実装している場合はデフォルトで JDK 動的プロキシを使用し、そうでなければ CGLIB 動的プロキシを使用します。

**在 CGLIB 动态代理机制中** **`MethodInterceptor`** **接口和** **`Enhancer`** **类は核心です。**

自分で `MethodInterceptor` を定義し、`intercept` メソッドをオーバーライドします。`intercept` は、代理されたクラスのメソッドを拡張する際の処理を挟むために使われます。

```java
public interface MethodInterceptor
extends Callback{
    // 拦截被代理类中的方法
    public Object intercept(Object obj, java.lang.reflect.Method method, Object[] args,MethodProxy proxy) throws Throwable;
}
```

1. **obj** : 被代理のオブジェクト（拡張が必要なオブジェクト）
2. **method** : 拦截するメソッド（拡張が必要なメソッド）
3. **args** : メソッドの引数
4. **proxy** : 元のメソッドを呼び出すため

`Enhancer` クラスを通じて動的に被代理クラスを取得します。代理クラスのメソッド呼び出し時には、実際には `MethodInterceptor` の `intercept` メソッドが呼び出されます。

- CGLIB 動的プロキシクラスの使用手順
    1. クラスを定義する；
    2. 自作の `MethodInterceptor` を定義し、`intercept` メソッドを上書きします。`intercept` は拡張される被代理クラスのメソッドを拡張するのに使用され、JDK 動的プロキシの `invoke` メソッドと同様です；
    3. `Enhancer` クラスの `create()` でプロキシクラスを作成します；
- コード例

    静的な JDK 動的プロキシとは異なり、追加の依存関係は不要です。[CGLIB](https://github.com/cglib/cglib)(_Code Generation Library_) は実際にはオープンソースプロジェクトで、もし使用する場合は関連依存関係を手動で追加する必要があります。


    ```xml
    <dependency>
      <groupId>cglib</groupId>
      <artifactId>cglib</artifactId>
      <version>3.3.0</version>
    </dependency>
    ```

    1. **AliSmsService のクラスを実装**

        ```java
        package github.javaguide.dynamicProxy.cglibDynamicProxy;
        
        public class AliSmsService {
            public String send(String message) {
                System.out.println("send message:" + message);
                return message;
            }
        }
        ```

    2. **自作の** `MethodInterceptor` **（メソッドインターセプター）**

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

    3. **代理クラスを取得**

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
                // 创建代理クラス
                return enhancer.create();
            }
        }
        ```

    4. **実際の使用**

        ```java
        AliSmsService aliSmsService = (AliSmsService) CglibProxyFactory.getProxy(AliSmsService.class);
        aliSmsService.send("java");
        ```


    実行すると、コンソールには次のように表示されます：


    ```plain text
    before method send
    send message:java
    after method send
    ```


### JDK 動的プロキシと CGLIB 動的プロキシの比較

1. **JDK 動的プロキシは、インターフェースを実装したクラスを代理するか、直接インターフェースを代理することしかできません。 一方、CGLIB はインターフェースを実装していないクラスも代理できます。** また、CGLIB 動的プロキシは代理クラスのサブクラスを生成して被代理クラスのメソッド呼び出しをインターセプトするため、**final として宣言されたクラスやメソッドを代理することはできません。**
2. それぞれの効率性については、多くの状況で JDK 動的プロキシのほうが優れており、JDK のバージョンが上がるにつれてこの利点はより顕著になります。

## 静的プロキシと動的プロキシの比較

1. **柔軟性**：動的プロキシはより柔軟で、必須でインターフェースを実装する必要はなく、実装クラスを直接代理できます。また、静的プロキシでは、インターフェースに新しいメソッドが追加されると、ターゲットオブジェクトと代理オブジェクトの両方を修正する必要があり、これは非常に煩雑です！
2. **JVM レイヤー**：静的プロキシはコンパイル時にインターフェース、実装クラス、代理クラスといったものを多くの実際のクラスファイルへと変換します。動的プロキシは実行時にクラスのバイトコードを動的に生成し、JVM にロードします。
