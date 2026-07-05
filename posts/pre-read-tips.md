---
title: '关于GPT-SoVITS从仓库到Windows11本地运行的导入'
published: 2026-07-05
updated: 2026-07-06
description: '本文只代表作者个人观点，状态为草稿。'
permalink: 'pre-read-tips'
image: 'https://source.unsplash.com/random'
tags: []
category: ''
draft: true
---

本文记录的是“从 Git repo 克隆源码开始，在 Windows 上把 GPT-SoVITS 跑起来”的流程。重点不是只列命令，而是说明每一步在解决什么问题、为什么需要它、依据来自哪里。


记录时间：2026-07-06


本机验证目录：`D:\AI\tts\GPTSoVits`


## **0. 先理解它由哪些部分组成**


GPT-SoVITS repo 主要提供代码。要真正运行，还需要准备：

- Python 运行环境：隔离依赖，避免污染系统 Python。
- PyTorch / CUDA：模型训练和推理的深度学习后端。
- torchaudio / TorchCodec / FFmpeg：音频读取、解码、重采样相关能力。
- 预训练模型：GPT-SoVITS 不是从零开始训练，微调和推理都依赖基础权重。
- 文本前处理资源：如 G2PW、NLTK、OpenJTalk，用于把文本转换成音素、读音或分词结果。

官方 README 也把安装拆成 Windows 安装、手动依赖、FFmpeg、预训练模型、数据集格式几个部分。


## **1. 克隆仓库**


```powershell
git clone https://github.com/RVC-Boss/GPT-SoVITS.git D:\AI\tts\GPTSoVits
cd D:\AI\tts\GPTSoVits
```


为什么要这样做：

- Git repo 里是最新源码，可以跟随上游更新。
- 但 repo 不是整合包，不包含完整 Python 环境和所有模型权重，所以后面还要安装依赖和下载模型。

参考：

- GPT-SoVITS GitHub 仓库：[https://github.com/RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)

## **2. 创建独立 Python 环境**


官方 Windows 示例使用 conda：


```powershell
conda create -n GPTSoVits python=3.10
conda activate GPTSoVits
```


本机这次使用的是项目内 `.venv`：


```powershell
uv venv --python 3.10 .venv
```


后续安装包时明确指定这个 Python：


```powershell
uv pip install --python .\.venv\Scripts\python.exe ...
```


为什么需要：

- GPT-SoVITS 依赖包较多，版本组合比较敏感。
- 单独环境可以避免和系统 Python、其他 AI 项目的 torch / numpy / gradio 等包互相影响。
- PyTorch 官方 Windows 安装页说明当前 Windows PyTorch 支持 Python 3.10-3.14；GPT-SoVITS README 的测试环境也列了 Python 3.10。

参考：

- GPT-SoVITS README Windows 安装段落：[https://github.com/RVC-Boss/GPT-SoVITS#installation](https://github.com/RVC-Boss/GPT-SoVITS#installation)
- PyTorch Windows 安装说明：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)

## **3. 安装 PyTorch、torchaudio、TorchCodec**


如果使用官方脚本，命令大致是：


```powershell
pwsh -F install.ps1 --Device <CU126|CU128|CPU> --Source <HF|HF-Mirror|ModelScope> [--DownloadUVR5]
```


其中：

- `CU128` 表示安装 CUDA 12.8 对应的 PyTorch wheel。
- `CU126` 表示安装 CUDA 12.6 对应的 PyTorch wheel。
- `CPU` 表示不用显卡，只走 CPU。

本机这次是手动方式，当前验证组合为：


```plain text
Python 3.10.20
torch 2.11.0+cu128
torchaudio 2.11.0+cu128
torchcodec 0.14.0
```


典型安装命令形态如下，具体版本应以 PyTorch 官网选择器为准：


```powershell
uv pip install --python .\.venv\Scripts\python.exe torch torchaudio torchcodec --index-url https://download.pytorch.org/whl/cu128
```


为什么需要：

- PyTorch 是模型训练和推理的计算框架。
- CUDA 版 PyTorch 才能使用 NVIDIA GPU 加速。
- torchaudio 是 PyTorch 生态里的音频处理库。
- 新版 torchaudio 读取音频时可能调用 TorchCodec；如果没有 TorchCodec，会出现 `TorchCodec is required`。

检查方式：


```powershell
.\.venv\Scripts\python.exe -c "import torch, torchaudio; print(torch.__version__); print(torchaudio.__version__); print(torch.cuda.is_available())"
.\.venv\Scripts\python.exe -c "import importlib.metadata as m; print(m.version('torchcodec'))"
```


参考：

- PyTorch 官方安装选择器：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)
- GPT-SoVITS `install.ps1` 中的 `-Device CU128/CU126/CPU` 逻辑
- TorchCodec README：[https://github.com/pytorch/torchcodec](https://github.com/pytorch/torchcodec)

## **4. 安装 GPT-SoVITS Python 依赖**


官方手动安装写法：


```powershell
pip install -r extra-req.txt --no-deps
pip install -r requirements.txt
```


本机 `.venv` 写法：


```powershell
uv pip install --python .\.venv\Scripts\python.exe -r extra-req.txt --no-deps
uv pip install --python .\.venv\Scripts\python.exe -r requirements.txt
```


为什么 `extra-req.txt --no-deps` 放在前面：

- 这是官方 README 和 `install.ps1` 的顺序。
- `-no-deps` 可以避免某些额外包反向拉取不合适的依赖版本，减少 torch / gradio / numpy 等版本被意外替换的概率。

参考：

- GPT-SoVITS README 的 Install Manually 段落
- GPT-SoVITS `install.ps1` 末尾安装依赖的顺序

## **5. 安装 FFmpeg**


GPT-SoVITS 官方 Windows 手动安装要求把下面两个文件放在项目根目录：


```plain text
ffmpeg.exe
ffprobe.exe
```


本机路径为：


```plain text
D:\AI\tts\GPTSoVits\ffmpeg.exe
D:\AI\tts\GPTSoVits\ffprobe.exe
```


为什么需要：

- GPT-SoVITS 处理音频时会调用 FFmpeg 做格式转换、解码、探测音频信息。
- 只有 Python 包不够，外部 `ffmpeg.exe` 仍然是常用音频处理工具。

参考：

- GPT-SoVITS README 的 Windows FFmpeg 段落

## **6. Windows 上额外处理 TorchCodec 的 FFmpeg shared DLL**


这一步是本机这次踩坑后额外补的。


问题表现：


```plain text
ImportError: TorchCodec is required for load_with_torchcodec
```


或者装了 TorchCodec 后变成：


```plain text
RuntimeError: Could not load libtorchcodec
On Windows, ensure you've installed the "full-shared" version which ships DLLs.
```


原因：

- `torchcodec` 本身是 Python 包，但它加载时还需要 FFmpeg 的 shared DLL。
- 只有 `ffmpeg.exe` / `ffprobe.exe` 不等于有 shared DLL。
- Windows 上需要类似 `avcodec-62.dll` 这种动态库。

本机采用项目内安装，不污染系统 PATH：


```plain text
runtime\ffmpeg-shared\ffmpeg-n8.1.2-21-gce3c09c101-win64-lgpl-shared-8.1\bin
```


这个目录里有：


```plain text
avcodec-62.dll
```


同时新增了项目级启动钩子：


```plain text
sitecustomize.py
```


它会在 Python 启动时做两件事：

- 找到 `runtime\ffmpeg-shared\*\bin\avcodec-62.dll`
- 调用 `os.add_dll_directory(...)`，让 Windows DLL 加载器能找到 FFmpeg shared DLL

为了直接运行 `.venv\Scripts\python.exe` 时也生效，还在 venv 里加了：


```plain text
.venv\Lib\site-packages\gpt_sovits_project_root.pth
```


检查方式：


```powershell
.\.venv\Scripts\python.exe -c "from torchcodec.decoders import AudioDecoder; print('torchcodec ok')"
.\.venv\Scripts\python.exe -c "import torchaudio; wav,sr=torchaudio.load(r'datasets\IROSEKA_HD\characters\sp000004_二階堂真紅\audio\00000010.ogg'); print(sr, tuple(wav.shape))"
```


本机验证结果：


```plain text
torchcodec ok
48000 (1, 277626)
```


参考：

- TorchCodec README 说明 Windows 需要 FFmpeg shared releases：[https://github.com/pytorch/torchcodec](https://github.com/pytorch/torchcodec)
- gyan.dev FFmpeg Windows builds 中有 `release full shared` / `FFmpeg (Shared)` 包：[https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/)

## **7. 下载和放置预训练模型**


官方说明：预训练模型放到：


```plain text
GPT_SoVITS\pretrained_models
```


G2PW 模型放到：


```plain text
GPT_SoVITS\text\G2PWModel
```


`install.ps1` 还会下载：

- `pretrained_models.zip`
- `G2PWModel.zip`
- `nltk_data.zip`
- `open_jtalk_dic_utf_8-1.11.tar.gz`

为什么需要：

- `pretrained_models`：GPT-SoVITS 微调和推理的基础权重，不是从零训练。
- `G2PWModel`：中文文本转拼音/读音相关资源，中文 TTS 需要。
- `nltk_data`：部分文本处理、分词或语言处理组件会用到。
- `open_jtalk` 字典：日语文本前处理会用到，用于把日文转成可建模的读音/音素信息。
- UVR5 权重：可选，用于人声/伴奏分离、混响处理；不做这类数据清洗时可以先不装。

参考：

- GPT-SoVITS README 的 Pretrained Models 段落
- GPT-SoVITS `install.ps1` 中下载模型、G2PW、NLTK、OpenJTalk 的逻辑

## **8. 启动 WebUI**


官方整合包通常直接双击：


```plain text
go-webui.bat
```


手动 `.venv` 环境可以直接运行：


```powershell
.\.venv\Scripts\python.exe webui.py zh_CN
```


本机对启动脚本做过兼容处理：

- 如果存在 `runtime\python.exe`，使用整合包 runtime。
- 否则使用 `.venv\Scripts\python.exe`。
- 启动前把项目根目录和 FFmpeg shared DLL 路径加入环境。

相关文件：


```plain text
go-webui.bat
go-webui.ps1
sitecustomize.py
```


为什么这样改：

- 官方脚本偏向整合包目录结构。
- Git clone + `.venv` 手动安装时，项目根目录和 shared FFmpeg DLL 路径需要显式处理。

## **9. 数据集格式**


GPT-SoVITS TTS 标注文件 `.list` 的格式是：


```plain text
vocal_path|speaker_name|language|text
```


日语示例：


```plain text
D:\AI\tts\GPTSoVits\datasets\IROSEKA_HD\characters\sp000004_二階堂真紅\audio\00000010.ogg|二階堂真紅|ja|...
```


为什么需要：

- `vocal_path` 告诉训练脚本音频在哪里。
- `speaker_name` 用于区分说话人。
- `language` 决定文本前处理走哪套语言规则。
- `text` 是和音频对应的台词。

参考：

- GPT-SoVITS README 的 Dataset Format 段落

## **10. 常见问题和本机处理方式**


### **TorchCodec 缺失**


现象：


```plain text
ModuleNotFoundError: No module named 'torchcodec'
ImportError: TorchCodec is required for load_with_torchcodec
```


处理：


```powershell
uv pip install --python .\.venv\Scripts\python.exe torchcodec
```


### **TorchCodec 已安装但仍然无法加载**


现象：


```plain text
RuntimeError: Could not load libtorchcodec
```


处理：

- 安装 FFmpeg shared 版，不只是 `ffmpeg.exe`。
- 在 Python 进程启动时注册 DLL 目录，本机通过 `sitecustomize.py` 完成。
- 保留 `soundfile` 兜底，避免 TorchCodec 临时不可用时训练/推理全挂。

### **单卡 S2 训练崩溃**


现象：


```plain text
torch.multiprocessing.spawn.ProcessExitedException: process 0 terminated with exit code 3221225477
```


本机处理：

- 单 GPU 时不走 `mp.spawn + DDP`。
- 直接单进程训练。
- Windows 下 DataLoader worker 默认设为 0，减少子进程问题。

相关文件：


```plain text
GPT_SoVITS\s2_train.py
```


### **日语 BERT 特征为空**


现象：

- 某些 `3-bert` 输出为空或跳过。

理解：

- 对日语数据，这通常不是关键错误；日语主要依赖对应的文本/音素处理流程。
- 需要重点确认的是音频、文本、SSL、语义、SoVITS 训练数据链路完整。

## **11. 最小验证清单**


环境验证：


```powershell
.\.venv\Scripts\python.exe -c "import torch; print(torch.__version__, torch.cuda.is_available())"
.\.venv\Scripts\python.exe -c "import torchaudio; print(torchaudio.__version__)"
.\.venv\Scripts\python.exe -c "from torchcodec.decoders import AudioDecoder; print('torchcodec ok')"
ffmpeg.exe -version
ffprobe.exe -version
```


音频读取验证：


```powershell
.\.venv\Scripts\python.exe -c "import torchaudio; wav,sr=torchaudio.load(r'datasets\IROSEKA_HD\characters\sp000004_二階堂真紅\audio\00000010.ogg'); print(sr, tuple(wav.shape))"
```


WebUI 启动：


```powershell
.\.venv\Scripts\python.exe webui.py zh_CN
```


或者：


```powershell
.\go-webui.ps1
```


## **12. 参考来源**

- GPT-SoVITS 官方仓库和 README：[https://github.com/RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)
- 本仓库 `README.md`：Windows 安装、手动依赖、FFmpeg、预训练模型、数据集格式。
- 本仓库 `install.ps1`：`CU126/CU128/CPU` 参数、模型下载、依赖安装、NLTK/OpenJTalk 下载逻辑。
- PyTorch 官方 Windows 安装说明：[https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)
- TorchCodec README：[https://github.com/pytorch/torchcodec](https://github.com/pytorch/torchcodec)
- gyan.dev FFmpeg Windows builds：[https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/)
