---
title: 'Java NIO'
published: 2024-02-05
updated: 2024-02-05
description: 'NIO（新I/O）是Java 1.4引入的非阻塞I/O模型，解决了传统BIO的性能瓶颈。其核心组件包括缓冲区（Buffer）、通道（Channel）和选择器（Selector），允许使用少量线程处理多个连接。NIO支持零拷贝技术，提高I/O效率，推荐使用基于NIO的框架如Netty以简化网络编程。'
permalink: 'java-nio-intro'
image: 'https://r2.dreaife.tokyo/notion/covers/f69a5fdaa2c04d268d0673f6063e9909/20240205_155308.jpg'
tags: ['java', 'meeting', 'doc', 'IO']
category: 'cs-base'
draft: false
lang: 'ja'
---

# NIO の概要

従来の Java I/O モデル（BIO）では、I/O 操作はブロックされる方式で実行されます。つまり、1つのスレッドが I/O 操作を実行している間、その操作が完了するまでブロックされます。このブロックモデルは複数の同時接続を処理する際に性能ボトルネックになる可能性があり、各接続ごとにスレッドを作成する必要があり、スレッドの作成と切り替えにはオーバーヘッドがあります。

この問題を解決するため、Java 1.4 で新しい I/O モデル—**NIO**（New IO、別名 Non-blocking IO）— が導入されました。NIO は同期ブロッキング I/O の不足を補い、標準の Java コードで非ブロック、バッファ指向、チャンネルベースの I/O を提供します。少ないスレッドで複数の接続を処理でき、I/O 効率と同時処理を大幅に向上させます。

- BIO:処理が完了するまでブロック
- NIO: Selector が複数の Channel を監視、非ブロック
- AIO: コールバック通知
> 注意事項：NIO の使用が必ずしも高性能を意味するわけではありません。主な性能利点は高い同時接続数と高遅延のネットワーク環境で発揮されます。接続数が少ない、同時処理が低い、またはネットワーク転送速度が速い場合には、NIO の性能は従来の BIO より優れているとは限りません。

# NIO の核心コンポーネント

NIO は主に以下の3つの核心コンポーネントで構成されます。

- **Buffer（バッファ）**：NIO のデータの読み書きはすべてバッファを介して行われます。読み取り時には Channel から Buffer にデータが詰められ、書き込み時には Buffer から Channel にデータが書き込まれます。
- **Channel（チャネル）**：Channel は双方向の、読み書き可能なデータ転送チャネルで、NIO は Channel を通じてデータの入出力を実現します。チャネルは抽象概念で、ファイル、ソケット、またはその他のデータソース間の接続を表すことができます。
- **Selector（セレクター）**：1つのスレッドが複数の Channel を処理できる、イベント駆動型の I/O 多重化モデルです。すべての Channel は Selector に登録され、Selector がイベントを処理するスレッドを割り当てます。

三者の関係は以下の図のとおりです：




![20240205222443.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240205222443.png)


## Buffer（バッファ）

従来の BIO では、データの読み書きはストリーム指向で、バイトストリームとキャラクターストリームに分かれます。

Java 1.4 の NIO ライブラリでは、すべてのデータはバッファで処理されます。これは新しいライブラリと従来の BIO との重要な違いで、BIO のバッファドリブンに似ています。NIO はデータを読む時にバッファへ直接読み込み、書く時にはバッファから書き込みます。NIO を使ってデータを読み書きする際は、すべてバッファを介して操作します。

`Buffer` のサブクラスで最もよく使われるのは `ByteBuffer` で、バイトデータの格納と操作に用いられます。

Buffer は配列として理解でき、`IntBuffer`、`FloatBuffer`、`CharBuffer` などはそれぞれ `int[]`、`float[]`、`char[]` に対応します。

より分かりやすくするため、`Buffer` クラスに定義されている4つのメンバー変数を簡単に見てみましょう：

```java
public abstract class Buffer {
    // Invariants: mark <= position <= limit <= capacity
    private int mark = -1;
    private int position = 0;
    private int limit;
    private int capacity;
}
```

これら4つのメンバーの具体的な意味は以下のとおりです：

1. 容量（`capacity`）：`Buffer` が格納できる最大データ量。作成時に設定され、変更不可。
2. 界限（`limit`）：`Buffer` 内で読み/書きデータの境界。書き込みモードでは、`limit` は書き込めるデータの最大量を表し、一般に `capacity` と等しい（`limit(int newLimit)` で設定可能）。読み取りモードでは、`limit` は Buffer に実際に書き込まれたデータのサイズに等しい。
3. 位置（`position`）：次に読み書きできるデータの位置（インデックス）。書き込みモードから読み取りモードへ切替えるとき（flip）、`position` はゼロに戻され、先頭から読み書きできるようになる。
4. マーク（`mark`）：`Buffer` は位置をこのマークに直接設定することを許します。これは任意の属性です。

また、上記の変数は次の関係を満たします：0 <= mark <= position <= limit <= capacity

さらに、Buffer には読み取りモードと書き込みモードの2つのモードがあり、それぞれ Buffer からデータを読み取るか Buffer へデータを書き込むために使用されます。Buffer の作成後はデフォルトで書き込みモードとなり、`flip()` を呼ぶと読み取りモードへ切り替わります。再度書き込みモードへ切り替えるには、`clear()` または `compact()` を呼び出します。

![20240205222458.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240205222458.png)


![20240205222503.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240205222503.png)


`Buffer` オブジェクトは `new` で作成することはできず、静的メソッドを介してインスタンス化されます。

ここでは `ByteBuffer` を例に紹介します：

```java
// 分配堆内存
public static ByteBuffer allocate(int capacity);
// 分配直接内存
public static ByteBuffer allocateDirect(int capacity);
```

Buffer の最も核心的な2つのメソッド：

1. `get`：バッファのデータを読み取る
2. `put`：バッファへデータを書き込む

上記の2つのメソッド以外にも、重要なメソッドは次のとおりです：

- `flip`：バッファを写し込みモードから読み取りモードへ切り替え、`limit` を現在の `position` に設定し、`position` を 0 に設定します。
- `clear`：バッファをクリアし、読み取りモードから書き込みモードへ切り替え、`position` を 0 に、`limit` を `capacity` の値に設定します。
- ……

Buffer 内のデータの変化過程は以下の通りです：




```java
import java.nio.*;

public class CharBufferDemo {
    public static void main(String[] args) {
        // 分配一个容量为8的CharBuffer
        CharBuffer buffer = CharBuffer.allocate(8);
        System.out.println("初始状态：");
        printState(buffer);

        // 向buffer写入3个字符
        buffer.put('a').put('b').put('c');
        System.out.println("写入3个字符后的状态：");
        printState(buffer);

        // 调用flip()方法，准备读取buffer中的数据，将 position 置 0,limit 的置 3
        buffer.flip();
        System.out.println("调用flip()方法后的状态：");
        printState(buffer);

        // 读取字符
        while (buffer.hasRemaining()) {
            System.out.print(buffer.get());
        }

        // 调用clear()方法，清空缓冲区，将 position 的值置为 0，将 limit 的值置为 capacity 的值
        buffer.clear();
        System.out.println("调用clear()方法后的状态：");
        printState(buffer);

    }

    // 打印buffer的capacity、limit、position、mark的位置
    private static void printState(CharBuffer buffer) {
        System.out.print("capacity: " + buffer.capacity());
        System.out.print(", limit: " + buffer.limit());
        System.out.print(", position: " + buffer.position());
        System.out.print(", mark 开始读取的字符: " + buffer.mark());
        System.out.println("\\n");
    }
}
```


输出如下：

```java
初始状态：
capacity: 8, limit: 8, position: 0

写入3个字符后的状态：
capacity: 8, limit: 8, position: 3

准备读取buffer中的数据！

调用flip()方法后的状态：
capacity: 8, limit: 3, position: 0

读取到的数据：abc

调用clear()方法后的状态：
capacity: 8, limit: 8, position: 0
```


理解を助けるため、私は `capacity`、`limit`、`position` の各段階の変化を示す図を描きました。




![20240205222512.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240205222512.png)


## Channel（チャネル）

Channel はデータソース（ファイル、ネットワークソケットなど）との接続を確立するチャネルです。データの読み書きに利用でき、Channel はデータが自由に流れる水道のようなものです。

BIO のストリームは一方向ですが、Channel は双方向で、読み取り・書き込み、あるいは同時に両方を行えます。

Channel は前述の Buffer とやりとりします。読み取り時には Channel から Buffer にデータを詰め込み、書き込み時には Buffer のデータを Channel に書き込みます。

![20240205222519.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240205222519.png)


また、Channel は全二重であるため、ストリームよりも低レベルの OS の API へのマッピングがより適切です。特に UNIX のネットワークプログラミングモデルでは、OS のチャネルは全二重で、読み書き操作の両方を同時にサポートします。

`Channel` のサブクラスは以下のようなチャネルが最もよく使われます：

- `FileChannel`：ファイルアクセスチャネル
- `SocketChannel`、`ServerSocketChannel`：TCP 通信チャネル
- `DatagramChannel`：UDP 通信チャネル

Channel の最も核心的な2つのメソッド：

1. `read`：データを読み取り、Buffer に書き込む。
2. `write`：Buffer のデータを Channel に書き込む。

ここでは `FileChannel` を例に、ファイルデータの読み取りをデモします。

```java
RandomAccessFile reader = new RandomAccessFile("test_read.in", "r"))
FileChannel channel = reader.getChannel();
ByteBuffer buffer = ByteBuffer.allocate(1024);
channel.read(buffer);
```

## Selector（セレクター）

Selector（セレクター）は NIO の重要なコンポーネントで、1つのスレッドが複数の Channel を処理できるようにします。Selector はイベント駆動型の I/O 多重化モデルで、主な動作原理は次のとおりです：**Selector にチャンネルのイベントを登録すると、Selector は登録された Channel を絶えずポーリングします。**

イベントが発生したとき、例えばある Channel に新しい TCP 接続が来る、読み込み・書き込みイベントが発生する場合、その Channel は就位状態となり、Selector によって取り出されます。Selector は関連する Channel を就位集合に追加します。`SelectionKey` を介して就位 Channel の集合を取得し、それらの就位 Channel に対して対応する I/O 操作を実行します。




![20240205222527.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240205222527.png)


1つの Selector は同時に複数の Channel をポーリングできます。JDK が従来の `select` 実装の代わりに `epoll()` を使用しているため、最大接続ハンドルの制限（1024/2048）はありません。これにより、Selector のポーリングを担当するだけの1つのスレッドで、数千ものクライアントを接続できます。

Selector は以下の4種類のイベントを監視できます：

1. `SelectionKey.OP_ACCEPT`：チャネルが接続を受け付けるイベント。通常は `ServerSocketChannel` で使用されます。
2. `SelectionKey.OP_CONNECT`：チャネルが接続を完了したイベント。通常は `SocketChannel` で使用されます。
3. `SelectionKey.OP_READ`：チャネルが読み取り準備完了のイベント。データを読めます。
4. `SelectionKey.OP_WRITE`：チャネルが書き込み準備完了のイベント。データを書き込めます。

`Selector` は抽象クラサであり、`open()` という静的メソッドを呼び出すことで Selector のインスタンスを作成できます。Selector は複数の `SelectableChannel` の I/O 状況を同時に監視できる、ノンブロック I/O の核心です。

1つの Selector インスタンスには、3つの `SelectionKey` 集合があります：

1. すべての `SelectionKey` 集合：この Selector に登録された Channel を表し、`keys()` メソッドで返されます。
2. 選択された `SelectionKey` 集合：`select()` メソッドで取得可能な、IO 処理が必要な Channel を表します。`selectedKeys()` で返されます。
3. 取消された `SelectionKey` 集合：登録解除された Channel を表し、次回の `select()` 実行時に対応する `SelectionKey` が完全に削除されます。通常はこの集合へ直接アクセスする必要はなく、公開されていません。

以下は、選択された `SelectionKey` 集合を遍歴して処理する簡単なデモです：




```java
Set<SelectionKey> selectedKeys = selector.selectedKeys();
Iterator<SelectionKey> keyIterator = selectedKeys.iterator();
while (keyIterator.hasNext()) {
    SelectionKey key = keyIterator.next();
    if (key != null) {
        if (key.isAcceptable()) {
            // ServerSocketChannel が新しい接続を受け付けた
        } else if (key.isConnectable()) {
            // 新しい接続が確立したことを示す
        } else if (key.isReadable()) {
            // Channel に準備されたデータがあり、読み取れる
        } else if (key.isWritable()) {
            // Channel に空きのあるバッファがあり、データを書き込める
        }
    }
    keyIterator.remove();
}
```


Selector には `select()` に関連する一連のメソッドも用意されています：

- `int select()`：登録されたすべての Channel を監視し、処理すべき IO 操作があるときに戻ります。対応する `SelectionKey` を就位集合に追加します。戻り値は、このように就位した Channel の数です。
- `int select(long timeout)`：タイムアウトを設定できる `select()` 操作。
- `int selectNow()`：瞬時に戻る `select()` 操作。引数なしの `select()` よりもスレッドをブロックしません。
- `Selector wakeup()`：まだ戻っていない `select()` を即座に戻します。
- ……

Selector を使ったネットワークの読み書きの簡単な例：




```java
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.Iterator;
import java.util.Set;

public class NioSelectorExample {

  public static void main(String[] args) {
    try {
      ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
      serverSocketChannel.configureBlocking(false);
      serverSocketChannel.socket().bind(new InetSocketAddress(8080));

      Selector selector = Selector.open();
      // 将 ServerSocketChannel 注册到 Selector 并监听 OP_ACCEPT 事件
      serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

      while (true) {
        int readyChannels = selector.select();

        if (readyChannels == 0) {
          continue;
        }

        Set<SelectionKey> selectedKeys = selector.selectedKeys();
        Iterator<SelectionKey> keyIterator = selectedKeys.iterator();

        while (keyIterator.hasNext()) {
          SelectionKey key = keyIterator.next();

          if (key.isAcceptable()) {
            // 处理连接事件
            ServerSocketChannel server = (ServerSocketChannel) key.channel();
            SocketChannel client = server.accept();
            client.configureBlocking(false);

            // 将客户端通道注册到 Selector 并监听 OP_READ 事件
            client.register(selector, SelectionKey.OP_READ);
          } else if (key.isReadable()) {
            // 处理读事件
            SocketChannel client = (SocketChannel) key.channel();
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            int bytesRead = client.read(buffer);

            if (bytesRead > 0) {
              buffer.flip();
              System.out.println("收到数据：" +new String(buffer.array(), 0, bytesRead));
              // 将客户端通道注册到 Selector 并监听 OP_WRITE 事件
              client.register(selector, SelectionKey.OP_WRITE);
            } else if (bytesRead < 0) {
              // 客户端断开连接
              client.close();
            }
          } else if (key.isWritable()) {
            // 处理写事件
            SocketChannel client = (SocketChannel) key.channel();
            ByteBuffer buffer = ByteBuffer.wrap("Hello, Client!".getBytes());
            client.write(buffer);

            // 将客户端通道注册到 Selector 并监听 OP_READ 事件
            client.register(selector, SelectionKey.OP_READ);
          }

          keyIterator.remove();
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
```


この例では、8080 番ポートをリッスンするシンプルなサーバを作成し、Selector を使って接続、読み取り、書き込みイベントを処理します。クライアントからデータを受信すると、サーバはデータを読み取り、コンソールに表示し、クライアントへ「Hello, Client!」と返信します。

# NIO のゼロコピー

ゼロコピーは I/O 操作の性能を向上させる一般的な手法で、ActiveMQ、Kafka、RocketMQ、QMQ、Netty などのトップクラスのオープンソースプロジェクトでも活用されています。

ゼロコピーとは、コンピュータが I/O 操作を実行する際に CPU がデータを1つのメモリ領域から別の領域へコピーする必要がなくなる、という意味で、コンテキストの切り替えと CPU のコピー時間を削減します。つまり、OS が I/O 操作を処理する際に頻繁にデータをコピーする問題を主に解決します。ゼロコピーの一般的な実装技術としては、`mmap+write`、`sendfile`、および `sendfile + DMA gather copy` があります。

下図は各種ゼロコピー技術の比較図です：


|                            | CPU コピー | DMA コピー | システムコール       | コンテキスト切替 |
| -------------------------- | ------ | ------ | ---------- | ----- |
| 従来の方法                       | 2      | 2      | read+write | 4     |
| mmap+write                 | 1      | 2      | mmap+write | 4     |
| sendfile                   | 1      | 2      | sendfile   | 2     |
| sendfile + DMA gather copy | 0      | 2      | sendfile   | 2     |


従来の I/O 方式であろうと、ゼロコピーを導入した後であろうと、2 回の DMA（Direct Memory Access）コピーは欠かせません。なぜなら、2 回の DMA はハードウェアの実装に依存して完了します。ゼロコピーは主に CPU のコピーとコンテキスト切替を削減します。

Java のゼロコピー対応：

- `MappedByteBuffer` は NIO のメモリマッピング（`mmap`）に基づくゼロコピーの実装の1つで、実際には Linux カーネルの `mmap` システムコールを呼び出します。ファイル全体または一部をメモリにマッピングして仮想メモリファイルを作成し、直接メモリ内のデータを操作でき、ファイルをシステムコールで読み書きする必要がなくなります。
- `FileChannel` の `transferTo()`/`transferFrom()` は NIO のファイル送信（`sendfile`）をベースとしたゼロコピーの実装の1つで、実際には Linux カーネルの `sendfile` システムコールを呼び出します。これにより、ファイルデータをディスクから直接ネットワークへ送信でき、ユーザ空間のバッファを経由する必要がなくなります。

    コード例：




```java
private void loadFileIntoMemory(File xmlFile) throws IOException {
  FileInputStream fis = new FileInputStream(xmlFile);
  // 创建 FileChannel 对象
  FileChannel fc = fis.getChannel();
  // FileChannel.map() 将文件映射到直接内存并返回 MappedByteBuffer 对象
  MappedByteBuffer mmb = fc.map(FileChannel.MapMode.READ_ONLY, 0, fc.size());
  xmlFileBuffer = new byte[(int)fc.size()];
  mmb.get(xmlFileBuffer);
  fis.close();
}
```


# まとめ

この記事では NIO の核心知識、特に NIO のコアコンポーネントとゼロコピーについて紹介しました。

NIO を使ってネットワークプログラムを構築する場合、ネイティブ NIO を直接使うことは推奨されません。プログラミングが複雑で機能性が不足しがちだからです。Netty のような NIO ベースの成熟したネットワークフレームワークを使うことをおすすめします。Netty は NIO をベースに、プロトコルの多様性、SSL/TLS のサポートなど、いくつかの最適化と拡張を行っています。
