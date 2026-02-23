---
title: 'Java IO'
published: 2024-02-05
updated: 2024-02-05
description: 'Java IO 涉及输入输出流的基本概念，包括字节流和字符流的分类及其常用类，如 InputStream、OutputStream、Reader 和 Writer。字节流用于处理原始字节数据，而字符流则用于处理字符数据。缓冲流通过减少 IO 操作次数提高性能，适配器模式和装饰器模式在 IO 流中广泛应用，以增强功能和协调不同接口。Java 的 IO 模型包括同步阻塞 IO、非阻塞 IO 和异步 IO，各自适用于不同的应用场景。'
permalink: 'java-io-basics'
image: 'https://r2.dreaife.tokyo/notion/covers/7ee1b1967f1444fe89348df8d5be5471/20240205_154729.jpg'
tags: ['java', 'doc', 'meeting', 'IO']
category: 'cs-base'
draft: false
lang: 'en'
---

# Java IO Basics

## IO Streams Overview

IO stands for `Input/Output`, input and output. The process of data entering the computer memory is input, while the process of outputting to external storage (such as a database, files, or remote hosts) is output. The data transfer process is like a flow of water, hence called IO streams. In Java, IO streams are divided into input streams and output streams, and based on how data is processed they are divided into byte streams and character streams.

Java IO has more than 40 classes derived from the following four abstract base classes.

- `InputStream`/`Reader`: The base class for all input streams; the former is a byte input stream, the latter is a character input stream.
- `OutputStream`/`Writer`: The base class for all output streams; the former is a byte output stream, the latter is a character output stream.

## Byte Streams

### InputStream (Byte Input Stream)

`InputStream` is used to read data (byte information) from a source (usually a file) into memory. The abstract class `java.io.InputStream` is the parent class of all byte input streams.

`InputStream` common methods:

- `read()`: Returns the next byte of data from the input stream. The returned value is between 0 and 255. If no bytes are read, the code returns 1, indicating end of file.
- `read(byte b[ ])`: Reads some bytes from the input stream and stores them into the array `b`. If the length of `b` is zero, nothing is read. If there are no available bytes to read, returns 1. If there are available bytes to read, the maximum number of bytes read is up to `b.length`, returning the number of bytes read. This method is equivalent to `read(b, 0, b.length)`.
- `read(byte b[], int off, int len)`: Adds the `off` (offset) and `len` (maximum number of bytes to read) parameters on top of `read(byte b[ ])`.
- `skip(long n)`: Skip `n` bytes in the input stream, returns the actual number of bytes skipped.
- `available()`: Returns the number of bytes that can be read from the input stream.
- `close()`: Closes the input stream and releases the associated system resources.

From Java 9 onward, `InputStream` adds several useful methods:

- `readAllBytes()`: Reads all bytes from the input stream and returns a byte array.
- `readNBytes(byte[] b, int off, int len)`: Blocks until `len` bytes are read.
- `transferTo(OutputStream out)`: Transfers all bytes from an input stream to an output stream.

`FileInputStream` is a commonly used byte input stream object; you can specify a file path directly, read single bytes, or read into a byte array.

`FileInputStream` code example:

```java
try (InputStream fis = new FileInputStream("input.txt")) {
    System.out.println("Number of remaining bytes:"
            + fis.available());
    int content;
    long skip = fis.skip(2);
    System.out.println("The actual number of bytes skipped:" + skip);
    System.out.print("The content read from file:");
    while ((content = fis.read()) != -1) {
        System.out.print((char) content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

However, generally we don’t use `FileInputStream` by itself; we typically use it together with `BufferedInputStream` (byte buffered input stream).

Like the code below, which is common in our projects, we read all bytes from the input stream with `readAllBytes()` and assign them directly to a `String` object.

```java
// 新建一个 BufferedInputStream 对象
BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream("input.txt"));
// 读取文件的内容并复制到 String 对象中
String result = new String(bufferedInputStream.readAllBytes());
System.out.println(result);
```

`DataInputStream` is used to read data of specified types and cannot be used alone; it must be combined with other streams, such as `FileInputStream`.

```java
FileInputStream fileInputStream = new FileInputStream("input.txt");
//必须将fileInputStream作为构造参数才能使用
DataInputStream dataInputStream = new DataInputStream(fileInputStream);
//可以读取任意具体的类型数据
dataInputStream.readBoolean();
dataInputStream.readInt();
dataInputStream.readUTF();
```

`ObjectInputStream` is used to read Java objects from an input stream (deserialization), and `ObjectOutputStream` is used to write objects to an output stream (serialization).

```java
ObjectInputStream input = new ObjectInputStream(new FileInputStream("object.data"));
MyClass object = (MyClass) input.readObject();
input.close();
```

Additionally, the classes used for serialization and deserialization must implement the `Serializable` interface; if there are fields you do not want serialized, mark them as `transient`.


### OutputStream (Byte Output Stream)

`OutputStream` is used to write data (byte information) to a destination (usually a file). The abstract class `java.io.OutputStream` is the parent class of all byte output streams.

`OutputStream` common methods:

- `write(int b)`: Write a single byte to the output stream.
- `write(byte b[ ])`: Write the array `b` to the output stream, equivalent to `write(b, 0, b.length)`.
- `write(byte[] b, int off, int len)`: Adds the `off` and `len` parameters to the `write(byte b[ ])` method.
- `flush()`: Flush this output stream and force all buffered output bytes to be written out.
- `close()`: Close the output stream and release the associated system resources.

`FileOutputStream` is the most common byte output stream object; you can specify a file path directly, can write single bytes or a specified byte array.

`FileOutputStream` code example:

```java
try (FileOutputStream output = new FileOutputStream("output.txt")) {
    byte[] array = "Dreaife yy".getBytes();
    output.write(array);
} catch (IOException e) {
    e.printStackTrace();
}
```

Similar to `FileInputStream`, `FileOutputStream` is usually used together with `BufferedOutputStream` (byte buffered output stream).

```java
FileOutputStream fileOutputStream = new FileOutputStream("output.txt");
BufferedOutputStream bos = new BufferedOutputStream(fileOutputStream)
```

**`DataOutputStream`** is used to write data of specified types; it cannot be used alone and must be combined with other streams, such as `FileOutputStream`.

```java
// 输出流
FileOutputStream fileOutputStream = new FileOutputStream("out.txt");
DataOutputStream dataOutputStream = new DataOutputStream(fileOutputStream);
// 输出任意数据类型
dataOutputStream.writeBoolean(true);
dataOutputStream.writeByte(1);
```

`ObjectInputStream` is used to read Java objects from an input stream (`ObjectInputStream`, deserialization), and `ObjectOutputStream` writes objects to an output stream (`ObjectOutputStream`, serialization).

```java
ObjectOutputStream output = new ObjectOutputStream(new FileOutputStream("file.txt")
Person person = new Person("dreaife", "eroger");
output.writeObject(person);
```

## 字符流

No matter whether reading/writing files or sending/receiving over the network, the smallest storage unit of information is bytes. Why do IO operations distinguish between byte streams and character streams?

I think there are two main reasons:

- Character streams are produced by the JVM by converting bytes, which can be quite time-consuming.
- If we don’t know the encoding, garbled characters can easily occur.

The garbled text issue is easy to reproduce: simply change the content of the `input.txt` in the `FileInputStream` example above to Chinese; the original code does not need to change, but the read content will clearly become garbled.

Therefore, IO streams provide a direct interface to operate on characters, making it convenient to handle character data. For media files like audio or images, byte streams are preferable; for character data, character streams are better.

Character streams default to Unicode encoding; we can customize encoding through constructors.

> By the way, a previously encountered interview question: how many bytes do common character encodings use? utf8: English 1 byte, Chinese 3 bytes; unicode: any character 2 bytes; gbk: English 1 byte, Chinese 2 bytes.

### Reader (Character Input Stream)

`Reader` is used to read data (character information) from a source (usually a file) into memory. The abstract class `java.io.Reader` is the parent class of all character input streams.

`Reader` is used to read text, while `InputStream` is used to read raw bytes.

`Reader` common methods:

- `read()`: Reads a character from the input stream.
- `read(char[] cbuf)`: Reads some characters from the input stream and stores them into the character array `cbuf`, equivalent to `read(cbuf, 0, cbuf.length)`.
- `read(char[] cbuf, int off, int len)`: Adds the `off` and `len` parameters on top of `read(char[] cbuf)`.
- `skip(long n)`: Skip `n` characters in the input stream, returns the actual number of characters skipped.
- `close()`: Closes the input stream and releases the associated resources.

`InputStreamReader` is the bridge from byte streams to character streams; its subclass `FileReader` is a wrapper based on that, allowing direct operations on character files.

```java
// 字节流转换为字符流的桥梁
public class InputStreamReader extends Reader {
}
// 用于读取字符文件
public class FileReader extends InputStreamReader {
}
```

`FileReader` code example:

```java
try (FileReader fileReader = new FileReader("input.txt");) {
    int content;
    long skip = fileReader.skip(3);
    System.out.println("The actual number of bytes skipped:" + skip);
    System.out.print("The content read from file:");
    while ((content = fileReader.read()) != -1) {
        System.out.print((char) content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Writer (Character Output Stream)

`Writer` is used to write data (character information) to a destination (usually a file); the abstract class `java.io.Writer` is the parent class of all character output streams.

`Writer` common methods:

- `write(int c)`: Write a single character.
- `write(char[] cbuf)`: Write the character array `cbuf`, equivalent to `write(cbuf, 0, cbuf.length)`.
- `write(char[] cbuf, int off, int len)`: Adds the `off` and `len` parameters on top of `write(char[] cbuf)`.
- `write(String str)`: Write a string, equivalent to `write(str, 0, str.length())`.
- `write(String str, int off, int len)`: Adds the `off` and `len` parameters on top of `write(String str)`.
- `append(CharSequence csq)`: Append the specified character sequence to this `Writer` and return this `Writer`.
- `append(char c)`: Append the specified character to this `Writer` and return this `Writer`.
- `flush()`: Flush this output stream and force any buffered characters to be written out.
- `close()`: Close the output stream and release the associated resources.

`OutputStreamWriter` is the bridge from character streams to byte streams; its subclass `FileWriter` is a wrapper based on this, which can write characters directly to a file.

```java
// 字符流转换为字节流的桥梁
public class OutputStreamWriter extends Writer {
}
// 用于写入字符到文件
public class FileWriter extends OutputStreamWriter {
}
```

`FileWriter` code example:

```java
try (Writer output = new FileWriter("output.txt")) {
    output.write("你好，我是dreaife");
} catch (IOException e) {
    e.printStackTrace();
}
```

## Byte Buffered Streams

IO operations are performance-intensive; buffered streams load data into a buffer so that multiple bytes can be read or written at once, avoiding frequent IO operations and improving stream transfer efficiency.

Byte-buffered streams use the decorator pattern to enhance the functionality of `InputStream` and `OutputStream` subclasses.

For example, we can enhance `FileInputStream` with `BufferedInputStream` (byte buffered input stream).

```java
// 新建一个 BufferedInputStream 对象
BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream("input.txt"));
```

The performance difference between byte streams and buffered byte streams mainly shows when we use the methods `write(int b)` and `read()` which read one byte at a time. Since buffered streams have an internal buffer (byte array), the buffered stream stores the read bytes in the buffer first, significantly reducing the number of IO operations and improving read efficiency.

I used the `write(int b)` and `read()` methods to copy a 524.9 mb PDF file with byte streams and buffered byte streams, and the timing comparison is as follows:

```java
使用缓冲流复制PDF文件总耗时:15428 毫秒
使用普通字节流复制PDF文件总耗时:2555062 毫秒
```

The time difference is very large; buffered streams take about 1/165 of the time of byte streams.

Test code:

```java
@Test
void copy_pdf_to_another_pdf_buffer_stream() {
    // 记录开始时间
    long start = System.currentTimeMillis();
    try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("深入理解计算机操作系统.pdf"));
         BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("深入理解计算机操作系统-副本.pdf"))) {
        int content;
        while ((content = bis.read()) != -1) {
            bos.write(content);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    // 记录结束时间
    long end = System.currentTimeMillis();
    System.out.println("使用缓冲流复制PDF文件总耗时:" + (end - start) + " 毫秒");
}

@Test
void copy_pdf_to_another_pdf_stream() {
    // 记录开始时间
    long start = System.currentTimeMillis();
    try (FileInputStream fis = new FileInputStream("深入理解计算机操作系统.pdf");
         FileOutputStream fos = new FileOutputStream("深入理解计算机操作系统-副本.pdf")) {
        int content;
        while ((content = fis.read()) != -1) {
            fos.write(content);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    // 记录结束时间
    long end = System.currentTimeMillis();
    System.out.println("使用普通流复制PDF文件总耗时:" + (end - start) + " 毫秒");
}
```

If you call `read(byte b[])` and `write(byte b[], int off, int len)` to write or read a byte array, as long as the byte array size is appropriate, the performance difference is not significant and can be basically ignored.

This time we use the methods `read(byte b[])` and `write(byte b[], int off, int len)` to copy a 524.9 mb PDF file, comparing the times between byte streams and buffered streams:

```java
使用缓冲流复制PDF文件总耗时:695 毫秒
使用普通字节流复制PDF文件总耗时:989 毫秒
```

The timing difference is not very large; buffered streams are a little faster.

Test code:

```java
@Test
void copy_pdf_to_another_pdf_with_byte_array_buffer_stream() {
    // 记录开始时间
    long start = System.currentTimeMillis();
    try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("深入理解计算机操作系统.pdf"));
         BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("深入理解计算机操作系统-副本.pdf"))) {
        int len;
        byte[] bytes = new byte[4 * 1024];
        while ((len = bis.read(bytes)) != -1) {
            bos.write(bytes, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    // 记录结束时间
    long end = System.currentTimeMillis();
    System.out.println("使用缓冲流复制PDF文件总耗时:" + (end - start) + " 毫秒");
}

@Test
void copy_pdf_to_another_pdf_with_byte_array_stream() {
    // 记录开始时间
    long start = System.currentTimeMillis();
    try (FileInputStream fis = new FileInputStream("深入理解计算机操作系统.pdf");
         FileOutputStream fos = new FileOutputStream("深入理解计算机操作系统-副本.pdf")) {
        int len;
        byte[] bytes = new byte[4 * 1024];
        while ((len = fis.read(bytes)) != -1) {
            fos.write(bytes, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    // 记录结束时间
    long end = System.currentTimeMillis();
    System.out.println("使用普通流复制PDF文件总耗时:" + (end - start) + " 毫秒");
}
```


### BufferedInputStream (Byte Buffered Input Stream)

`BufferedInputStream` reads data (byte information) from a source (usually a file) into memory without reading byte by byte; it first stores the read bytes into an internal buffer and then reads bytes from that internal buffer. This significantly reduces the number of IO operations and improves read efficiency.

`BufferedInputStream` maintains an internal buffer; this buffer is effectively a byte array, as seen from its source code.

```java
public
class BufferedInputStream extends FilterInputStream {
    // 内部缓冲区数组
    protected volatile byte buf[];
    // 缓冲区的默认大小
    private static int DEFAULT_BUFFER_SIZE = 8192;
    // 使用默认的缓冲区大小
    public BufferedInputStream(InputStream in) {
        this(in, DEFAULT_BUFFER_SIZE);
    }
    // 自定义缓冲区大小
    public BufferedInputStream(InputStream in, int size) {
        super(in);
        if (size <= 0) {
            throw new IllegalArgumentException("Buffer size <= 0");
        }
        buf = new byte[size];
    }
}
```

缓冲区的大小默认为 **8192** 字节，当然了，你也可以通过 `BufferedInputStream(InputStream in, int size)` 这个构造方法来指定缓冲区的大小。


### BufferedOutputStream (Byte Buffered Output Stream)

`BufferedOutputStream` 将数据（字节信息）写入到目的地（通常是文件）的过程中不会一个字节一个字节的写入，而是会先将要写入的字节存放在缓存区，并从内部缓冲区中单独写入字节。这样大幅减少了 IO 次数，提高了读取效率

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("output.txt"))) {
    byte[] array = "dreaifeICU".getBytes();
    bos.write(array);
} catch (IOException e) {
    e.printStackTrace();
}
```

类似于 `BufferedInputStream` ，`BufferedOutputStream` 内部也维护了一个缓冲区，并且，这个缓存区的大小也是 **8192** 字节。


## Character Buffered Streams

`BufferedReader` (Character Buffered Input Stream) and `BufferedWriter` (Character Buffered Output Stream) are similar to `BufferedInputStream` (Byte Buffered Input Stream) and `BufferedOutputStream` (Byte Buffered Output Stream); both maintain an internal buffer. However, the former is mainly used to handle character information.


## Print Streams

You probably use this code often, right?

```java
System.out.print("Hello！");
System.out.println("Hello！");
```

`System.out` is actually used to obtain a `PrintStream` object; the `print` method actually calls the `write` method of the `PrintStream` object.

`PrintStream` is a byte-based print stream, and its counterpart is `PrintWriter` (character print stream). `PrintStream` is a subclass of `OutputStream`, and `PrintWriter` is a subclass of `Writer`.


```java
public class PrintStream extends FilterOutputStream
    implements Appendable, Closeable {
}
public class PrintWriter extends Writer {
}
```


## Random Access Streams

The random access stream we will discuss here refers to `RandomAccessFile`, which supports jumping to any position in a file for reading and writing.

`RandomAccessFile` constructors are as follows; you can specify `mode` (read/write).

```java
// openAndDelete 参数默认为 false 表示打开文件并且这个文件不会被删除
public RandomAccessFile(File file, String mode)
    throws FileNotFoundException {
    this(file, mode, false);
}
// 私有方法
private RandomAccessFile(File file, String mode, boolean openAndDelete)  throws FileNotFoundException{
  // 省略大部分代码
}
```

There are four main modes:

- `r`: Read-only mode.
- `rw`: Read/write mode
- `rws`: In relation to `rw`, synchronously updates to external storage device for modifications to both the file's content and metadata.
- `rwd`: In relation to `rw`, synchronously updates to external storage device for modifications to the file's content.

File content refers to the actual data stored in the file; metadata describes attributes such as file size, creation and modification times.

`RandomAccessFile` has a file pointer that indicates the position of the next byte to be read or written. You can set the file pointer offset with `seek(long pos)` (pos bytes from the beginning). If you want to get the current position, use `getFilePointer()`.

`RandomAccessFile` code example:

```java
RandomAccessFile randomAccessFile = new RandomAccessFile(new File("input.txt"), "rw");
System.out.println("读取之前的偏移量：" + randomAccessFile.getFilePointer() + ",当前读取到的字符" + (char) randomAccessFile.read() + "，读取之后的偏移量：" + randomAccessFile.getFilePointer());
// 指针当前偏移量为 6
randomAccessFile.seek(6);
System.out.println("读取之前的偏移量：" + randomAccessFile.getFilePointer() + ",当前读取到的字符" + (char) randomAccessFile.read() + "，读取之后的偏移量：" + randomAccessFile.getFilePointer());
// 从偏移量 7 的位置开始往后写入字节数据
randomAccessFile.write(new byte[]{'H', 'I', 'J', 'K'});
// 指针当前偏移量为 0，回到起始位置
randomAccessFile.seek(0);
System.out.println("读取之前的偏移量：" + randomAccessFile.getFilePointer() + ",当前读取到的字符" + (char) randomAccessFile.read() + "，读取之后的偏移量：" + randomAccessFile.getFilePointer());
```


`RandomAccessFile` 的 `write` 方法在写入对象的时候如果对应的位置已经有数据的话，会将其覆盖掉。

```java
RandomAccessFile randomAccessFile = new RandomAccessFile(new File("input.txt"), "rw");
randomAccessFile.write(new byte[]{'H', 'I', 'J', 'K'});
```

假设运行上面这段程序之前 `input.txt` 文件内容变为 `ABCD` ，运行之后则变为 `HIJK`。


`RandomAccessFile` 一个较常见的应用就是实现大型文件的 **断点续传**。断点续传是什么？简单来说，就是在上传文件过程中的暂停或失败（例如遇到网络问题）后，不需要重新上传，只需上传尚未成功上传的文件分片。分片（先将文件切分成多个文件分片）上传是断点续传的基础。

`RandomAccessFile` 的实现依赖于 `FileDescriptor`（文件描述符）和 `FileChannel`（内存映射文件）。


# Java IO Design Patterns

## Decorator Pattern

The Decorator pattern can extend the functionality of an existing object without modifying the object itself.

The decorator pattern uses composition instead of inheritance to extend the functionality of the original class, and it is particularly useful in scenarios with complex inheritance hierarchies (IO features many inheritance relationships).

For byte streams, `FilterInputStream` (for input streams) and `FilterOutputStream` (for output streams) are the core of the decorator pattern, used to enhance the functionality of `InputStream` and `OutputStream` subclasses respectively.

Common examples like `BufferedInputStream` (byte buffered input stream) and `DataInputStream` etc. are subclasses of `FilterInputStream`, while `BufferedOutputStream` (byte buffered output stream) and `DataOutputStream` etc. are subclasses of `FilterOutputStream`.

For example, we can enhance `FileInputStream` with `BufferedInputStream` (byte buffered input stream).

`BufferedInputStream` constructor is as follows:

```java
public BufferedInputStream(InputStream in) {
    this(in, DEFAULT_BUFFER_SIZE);
}

public BufferedInputStream(InputStream in, int size) {
    super(in);
    if (size <= 0) {
        throw new IllegalArgumentException("Buffer size <= 0");
    }
    buf = new byte[size];
}
```

As you can see, one of the constructor parameters of `BufferedInputStream` is an `InputStream`.

`BufferedInputStream` code example:

```java
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("input.txt"))) {
    int content;
    long skip = bis.skip(2);
    while ((content = bis.read()) != -1) {
        System.out.print((char) content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

At this point you may wonder: why not just make a `BufferedFileInputStream` (character buffered file input stream) directly?

```java
BufferedFileInputStream bfis = new BufferedFileInputStream("input.txt");
```

If there are only a few `InputStream` subclasses, this would be fine. However, there are many `InputStream` subclasses, and the inheritance is quite complex. If we tailor a buffered input stream for every subclass, that would be quite a hassle.

If you are familiar with IO streams, you will notice that `ZipInputStream` and `ZipOutputStream` can also enhance the capabilities of `BufferedInputStream` and `BufferedOutputStream` respectively.

```java
BufferedInputStream bis = new BufferedInputStream(new FileInputStream(fileName));
ZipInputStream zis = new ZipInputStream(bis);

BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(fileName));
ZipOutputStream zipOut = new ZipOutputStream(bos);
```

`ZipInputStream` and `ZipOutputStream` extend `InflaterInputStream` and `DeflaterOutputStream`, respectively.

```java
public
class InflaterInputStream extends FilterInputStream {
}

public
class DeflaterOutputStream extends FilterOutputStream {
}
```

This is also an important feature of the decorator pattern: you can nest multiple decorators around the original class.

To achieve this, decorator classes need to extend the same abstract class or implement the same interface as the original class. The IO-related decorators mentioned above share the common base classes of `InputStream` and `OutputStream` with the original classes.

For character streams, `BufferedReader` can be used to augment the functionality of `Reader` (character input streams), and `BufferedWriter` can augment the functionality of `Writer` (character output streams).

```java
BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(fileName), "UTF-8"));
```

There are many examples of applying the decorator pattern in IO streams; you don’t need to memorize them all. Once you grasp the decorator pattern’s core, you’ll naturally know where it applies when using IO streams.


## Adapter Pattern

The Adapter Pattern is mainly used to coordinate classes with incompatible interfaces; you can think of it as the power adapter we use in daily life.

In the adapter pattern, the object or class being adapted is called the Adaptee, and the object or class that adapts is called the Adapter. Adapters can be class adapters (using inheritance) or object adapters (using composition).

The interfaces of character streams and byte streams in IO are different; adapters allow them to work together, more precisely as object adapters. Through the adapter, we can adapt a byte stream object into a character stream object, so we can directly read or write character data through the byte stream object.

`InputStreamReader` and `OutputStreamWriter` are two adapters, and they are also bridges between byte streams and character streams. `InputStreamReader` uses `StreamDecoder` (a stream decoder) to decode bytes, implementing conversion from byte streams to character streams, while `OutputStreamWriter` uses `StreamEncoder` (a stream encoder) to encode characters, implementing conversion from character streams to byte streams.

`InputStream` and `OutputStream` subclasses are the adaptees, while `InputStreamReader` and `OutputStreamWriter` are the adapters.

```java
// InputStreamReader 是适配器，FileInputStream 是被适配的类
InputStreamReader isr = new InputStreamReader(new FileInputStream(fileName), "UTF-8");
// BufferedReader 增强 InputStreamReader 的功能（装饰器模式）
BufferedReader bufferedReader = new BufferedReader(isr);
```

`java.io.InputStreamReader` partial source code:

```java
public class InputStreamReader extends Reader {
    //用于解码的对象
    private final StreamDecoder sd;
    public InputStreamReader(InputStream in) {
        super(in);
        try {
            // 获取 StreamDecoder 对象
            sd = StreamDecoder.forInputStreamReader(in, this, (String)null);
        } catch (UnsupportedEncodingException e) {
            throw new Error(e);
        }
    }
    // 使用 StreamDecoder 对象做具体的读取工作
    public int read() throws IOException {
        return sd.read();
    }
}
```

`java.io.OutputStreamWriter` partial source code:

```java
public class OutputStreamWriter extends Writer {
    // 用于编码的对象
    private final StreamEncoder se;
    public OutputStreamWriter(OutputStream out) {
        super(out);
        try {
           // 获取 StreamEncoder 对象
            se = StreamEncoder.forOutputStreamWriter(out, this, (String)null);
        } catch (UnsupportedEncodingException e) {
            throw new Error(e);
        }
    }
    // 使用 StreamEncoder 对象做具体的写入工作
    public void write(int c) throws IOException {
        se.write(c);
    }
}
```

**What is the difference between the Adapter pattern and the Decorator pattern?**

- The Decorator pattern focuses more on dynamically enhancing the functionality of the original class; decorator classes must extend the same abstract class or implement the same interface as the original class. It also supports nesting multiple decorators around the original class.
- The Adapter pattern focuses on making otherwise incompatible interfaces work together; when we call the adapter’s corresponding method, the adapter will internally call the adaptee’s method or related classes’ methods, in a transparent way. For example, `StreamDecoder` (stream decoder) and `StreamEncoder` (stream encoder) are based on `InputStream` and `OutputStream` to obtain a `FileChannel` object and call the corresponding `read` and `write` methods to read and write byte data.

```java
StreamDecoder(InputStream in, Object lock, CharsetDecoder dec) {
    // 省略大部分代码
    // 根据 InputStream 对象获取 FileChannel 对象
    ch = getChannel((FileInputStream)in);
}
```

- Adapter and adaptee do not need to share the same abstract class or interface.

Additionally, the `FutureTask` class uses the Adapter pattern; the internal class `RunnableAdapter` in `Executors` is an adapter that adapts a `Runnable` to a `Callable`.

`FutureTask` constructor with a `Runnable` parameter:

```java
public FutureTask(Runnable runnable, V result) {
    // 调用 Executors 类的 callable 方法
    this.callable = Executors.callable(runnable, result);
    this.state = NEW;
}
```

The corresponding methods and adapters inside `Executors`:

```java
// 实际调用的是 Executors 的内部类 RunnableAdapter 的构造方法
public static <T> Callable<T> callable(Runnable task, T result) {
    if (task == null)
        throw new NullPointerException();
    return new RunnableAdapter<T>(task, result);
}
// 适配器
static final class RunnableAdapter<T> implements Callable<T> {
    final Runnable task;
    final T result;
    RunnableAdapter(Runnable task, T result) {
        this.task = task;
        this.result = result;
    }
    public T call() {
        task.run();
        return result;
    }
}
```


## Factory Pattern

The factory pattern is used to create objects; in NIO there are many factory patterns, such as the static factory method in `Files` to create an `InputStream` object via `newInputStream`, the `Paths` class’s `get` method to create `Path` objects (static factory), and `ZipFileSystem`'s `getPath` method to create `Path` objects (simple factory) in internal implementations under the `sun.nio` package related to `java.nio`.

```java
InputStream is = Files.newInputStream(Paths.get(generatorLogoPath))
```


## Observer Pattern

The file directory monitoring service in NIO uses the observer pattern.

The file directory monitoring service in NIO is based on the `WatchService` interface and the `Watchable` interface. `WatchService` is the observer, and `Watchable` is the observed.

`Watchable` interface defines a method to register an object with a `WatchService` (monitoring service) and bind the events to listen for, via `register`.

```java
public interface Path
    extends Comparable<Path>, Iterable<Path>, Watchable{
}

public interface Watchable {
    WatchKey register(WatchService watcher,
                      WatchEvent.Kind<?>[] events,
                      WatchEvent.Modifier... modifiers)
        throws IOException;
}
```

`WatchService` is used to monitor changes to directories, and a single `WatchService` object can listen to multiple directories.

```java
// 创建 WatchService 对象
WatchService watchService = FileSystems.getDefault().newWatchService();

// 初始化一个被监控文件夹的 Path 类:
Path path = Paths.get("workingDirectory");
// 将这个 path 对象注册到 WatchService（监控服务） 中去
WatchKey watchKey = path.register(
watchService, StandardWatchEventKinds...);
```

The second parameter of the `Path` class’s `register` method, `events` (events to listen for), is a varargs parameter, meaning we can listen for multiple events at once.

```java
WatchKey register(WatchService watcher,
                  WatchEvent.Kind<?>... events)
    throws IOException;
```

Common events include three types:

- `StandardWatchEventKinds.ENTRY_CREATE`: File creation.
- `StandardWatchEventKinds.ENTRY_DELETE` : File deletion.
- `StandardWatchEventKinds.ENTRY_MODIFY` : File modification.

The `register` method returns a `WatchKey` object, through which you can obtain specific information about the event, such as whether a file was created, deleted, or modified, and the exact name of the file.

```java
WatchKey key;
while ((key = watchService.take()) != null) {
    for (WatchEvent<?> event : key.pollEvents()) {
      // 可以调用 WatchEvent 对象的方法做一些事情比如输出事件的具体上下文信息
    }
    key.reset();
}
```

The internals of `WatchService` implement a daemon thread that periodically polls for file changes; a simplified version is shown below.

```java
class PollingWatchService
    extends AbstractWatchService
{
    // 定义一个 daemon thread（守护线程）轮询检测文件变化
    private final ScheduledExecutorService scheduledExecutor;

    PollingWatchService() {
        scheduledExecutor = Executors
            .newSingleThreadScheduledExecutor(new ThreadFactory() {
                 @Override
                 public Thread newThread(Runnable r) {
                     Thread t = new Thread(r);
                     t.setDaemon(true);
                     return t;
                 }});
    }

  void enable(Set<? extends WatchEvent.Kind<?>> events, long period) {
    synchronized (this) {
      // 更新监听事件
      this.events = events;

        // 开启定期轮询
      Runnable thunk = new Runnable() { public void run() { poll(); }};
      this.poller = scheduledExecutor
        .scheduleAtFixedRate(thunk, period, period, TimeUnit.SECONDS);
    }
  }
}
```


# Java IO Models

## I/O

### What is I/O?

I/O (I nput / O utpu t) stands for inputs/outputs.

We’ll first interpret I/O from the perspective of computer architecture.

According to the von Neumann architecture, a computer’s structure is divided into five parts: the Arithmetic Logic Unit, the Control Unit, memory, input devices, and output devices.

[Image: 20240205214505.png]

Input devices (such as a keyboard) and output devices (such as a monitor) are external devices. Network interfaces and hard disks can be both input and output devices.

Input devices input data to the computer, and output devices receive data output by the computer.

From the perspective of computer architecture, I/O describes the communication process between the computer system and external devices.

Now from the perspective of an application:

According to OS knowledge: to ensure the stability and safety of the operating system, a process’s address space is divided into the user space and the kernel space.

Typically, the applications we run operate in user space; only the kernel space can perform system-level resource operations such as file management, inter-process communication, memory management, etc. In other words, to perform IO operations, we must rely on the kernel space.

Also, user-space programs cannot directly access the kernel space.

When you want to perform IO operations, because you don’t have permission to perform those operations directly, you must issue system calls to request the operating system to help.

Therefore, when a user process wants to perform IO operations, it must indirectly access the kernel space through system calls.

In our daily development, the most common IO we deal with are disk IO (reading/writing files) and network IO (network requests and responses).

From the application’s perspective, our application makes IO calls to the kernel of the operating system (system calls); the kernel performs the actual IO operations. In other words, our application merely initiates the IO operation, and the actual IO execution is performed by the OS kernel.

When an application initiates an I/O call, there are two steps:
1) The kernel waits for the IO device to be ready with data
2) The kernel copies the data from the kernel space to the user space.

### What are the common IO models?

In UNIX systems, there are five IO models: synchronous blocking I/O, synchronous non-blocking I/O, I/O multiplexing, signal-driven I/O, and asynchronous I/O.

These are the five IO models we often refer to.


## Three Common IO Models in Java

### BIO (Blocking I/O)

**BIO belongs to the synchronous blocking IO model.**

In the synchronous blocking IO model, once the application issues a read call, it will block until the kernel copies the data into the user space.

[Image: 20240205214516.png]

When the number of client connections is not large, this is fine. But when faced with hundreds of thousands or millions of connections, the traditional BIO model falls short. Therefore, we need a more efficient I/O processing model to handle higher concurrency.

### NIO (Non-blocking / New I/O)

Java NIO was introduced in Java 1.4 within the `java.nio` package, providing abstractions such as `Channel`, `Selector`, `Buffer`, and other constructs. The N in NIO can be understood as Non-blocking, not merely New. It is geared toward buffer-oriented, channel-based I/O operations. For high-load, high-concurrency (network) applications, use NIO.

Java's NIO can be seen as an I/O multiplexing model. Some people also consider Java’s NIO to be a form of synchronous non-blocking IO.

First, look at the **synchronous non-blocking IO model**.

[Image: 20240205214524.png]

In the synchronous non-blocking IO model, the application continuously issues a read call, and during the time the data is being copied from kernel space to user space, the thread remains blocked until the data is copied to user space.

Compared with the synchronous blocking IO model, the synchronous non-blocking IO model is indeed an improvement. Through polling, it avoids constant blocking.

However, this IO model also has a problem: the application repeatedly makes I/O system calls to poll whether data is ready, which is highly CPU-intensive.

At this point, the IO multiplexing model comes into play.

[Image: 20240205214533.png]

In the IO multiplexing model, a thread first issues a select call to ask the kernel whether data is ready; once the kernel has prepared the data, the user thread issues a read call. The read operation (data from kernel space to user space) is still blocking.

Currently available IO multiplexing system calls include select, epoll, etc. The select call is supported by almost all operating systems. The epoll call is an enhanced version of select in Linux 2.6, optimized for IO execution efficiency.

The IO multiplexing model reduces CPU resource consumption by reducing unnecessary system calls.

In Java, NIO has a very important concept: the Selector, also known as the multiplexer. With it, you can manage multiple client connections with a single thread. When client data arrives, you then service it.

[Image: 20240205214546.png]

### AIO (Asynchronous I/O)

AIO is also NIO.2. Introduced in Java 7, it is an improved version of NIO and represents an asynchronous IO model.

Asynchronous IO is implemented based on events and callbacks. After issuing an operation, the application returns immediately, and the operation does not block; when the background processing completes, the OS notifies the corresponding thread to continue.

[Image: 20240205214556.png]

As of now, AIO is not widely used. Netty has experimented with AIO before but abandoned it, because Netty’s performance on Linux did not improve much after adopting AIO.

Finally, a diagram summarizing BIO, NIO, and AIO in Java.

[Image: 20240205214605.png]
