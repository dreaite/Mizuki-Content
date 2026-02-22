---
title: 'github上传大文件'
published: 2022-07-07
updated: 2022-07-07
description: '要在GitHub上上传大文件，需要安装Git Large File Storage（LFS），并在本地Git仓库中进行配置。具体步骤包括安装LFS、配置跟踪大文件的指针，并通过相应的命令上传文件。完成这些步骤后，即可成功上传大文件至GitHub。'
permalink: 'github-large-files'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/120b7f0a-f6b9-4465-a441-e26ee08609d0/20220922_201845.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNS6BWN%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CnggUmQNTIWcxpk71sKe%2BtcT0RVUJnkPa1sONfkxywIgWix1CfX3kaputgPwarZUIm7ANIL%2FnkR%2Bs9ctAQYwHUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoT9%2B%2FRgaZzFud2TSrcA6ZIdkCm0Ediqay5sOB%2BtmFTfvN%2F%2FiM3m%2F741v%2F4WBgrN8nAdCqs3K0VwKqA87HJN%2FOVRcC613qZ8Vk3uuCXBRVmMq3bP4SIlSXY05b9NsSlLB21h4aAJO%2BUo9I5B0OKrge%2FTIMz5t56djaob1uhJaeKQadOFjvvl4vBIoul9KfMJe3GpdLQfkWx5HKq9mGFkHtGO2EWxSRKt1PzPg8778DWmZBTnwZ2YZNpAF8Vp2zEZF6UMPZRWWYTe3AAB65obPV1EWwXRTDaJ9z%2BncisYqkargisww8OzzKImvt5cZILOD8cEL%2Fp2uopoku1gp5jLHz3lvfO6DyEerPRGgpCtAqjNzjhPJLT1T3eqgap6aKwSmtpmKjsPT7jYyAmMNTk92IzUW0sTA9HsYbfl5BQchOJqYBSimo7RP0jfpBzIPcPAjR0IPIpavdDv0u272P00%2BnvavidCmm6%2FjDHZzLK%2FWMhCC1qParzGxRVFKQfj5JIWHcMA2t6qMlrLcqjAZGqb0Sf9jAIV1ylcSFBpa7YSppoqLOEkQwnaRmZiaKxGM%2BouTPJDU71RslQ9XjZWdbID5ENcci%2F98HbSW8Oe5SR3HH5tDagoVWqoCx1Q2uszHPL7uAQ8Z6hoX4Ws%2FRNMIbF6swGOqUBQOf5kXQFX3yokCvwpqOkVYHnJ%2BkSV26e003qD3b5u%2BdxOClHMeiP5JxnpBXoNTy4%2F5LsnK38wifdV7M7j9Zpx3qluNkI115JBCKcURrDbXplhGJUCPuZaVV7yhvlTO3qekjS8%2By3g9Yy4Gdvhf1d3CBLBgYPAxCxE%2Fd9myIs0pAcvhHT4nUEkZwrjkso1JE0Ev147f5qpEKi59tWtwfvL%2Fi4Xl%2Fl&X-Amz-Signature=5801dd0d6a9ae32e2595ba511f689f8194930fa3b768aad12f58ce6bb758a5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['github', 'lfs']
category: 'infra'
draft: false
---

众所周知，github不能上传过大的文件。本人由于需将资料pdf上传备份，故参考多份博客得以解决。


对于已经将git在本地配置过的只需三步即可完成。若尚未配置好git，请先浏览其他博客完成git设置。


# 1 安装下载[Git Large File Storage](https://git-lfs.github.com/)


要上传大文件首先需要获取对于git大文件上传支持的git lfs程序。


# 2 Git Large File Storage配置


在git仓库所在文件夹中输入如下代码，用于安装。


```plain text
git lfs install
```


# 3 文件上传


在安装git lfs后依次输入下列代码即可。


```plain text
git lfs track "YourFileName"
git add .gitattributes
git commit -m "..."
git push                          #上传用于替代大文件的指针
git add YourFileName
git commit -m "..."
git push                          #正常上传文件即可
```


如此即可实现在github上对于大文件的上传
