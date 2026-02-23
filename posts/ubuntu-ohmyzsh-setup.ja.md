---
title: 'Ubuntuでoh-my-zshとそのコンポーネントを導入する'
published: 2024-12-03
updated: 2024-12-03
description: 'Ubuntuでoh-my-zshと関連コンポーネントを導入する手順として、まずzshとgitをインストールし、次にwgetでoh-my-zshを導入します。その後、powerlevel10kテーマと必要なプラグインをクローンし、.zshrcを更新してテーマとプラグインを適用します。最後にzsh-batやyou-should-useなどの追加プラグインを導入し、システム更新を行って正常動作を確認します。'
image: 'https://r2.dreaife.tokyo/notion/covers/1515465cca178073b194f4ade9c3a703/IMG_1723.jpg'
tags: ['bash', 'linux']
category: 'prog-side'
draft: false
lang: 'ja'
---

# zshのインストール


```shell
sudo apt install -y zsh git || sudo pacman -S --needed zsh git || sudo yum install zsh git || sudo zypper in zsh git || sudo apk add zsh git;
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)" &&
zsh
```


# テーマのインストール


```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k &&
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions &&
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting &&
sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="powerlevel10k\/powerlevel10k"/' ~/.zshrc &&
sed -i '/^plugins=(git)$/c\
plugins=(\
   git\
   sudo\
   command-not-found\
   safe-paste\
   vi-mode\
   you-should-use\
   zsh-bat\
   zsh-autosuggestions\
   zsh-syntax-highlighting\
)' ~/.zshrc &&
exit
```


# プラグインのインストール


プラグイン:


```shell
plugins=(
   git
   sudo
   command-not-found
   safe-paste
   vi-mode
   you-should-use
   zsh-bat
   zsh-autosuggestions
   zsh-syntax-highlighting
)
```


```shell
git clone https://github.com/MichaelAquilina/zsh-you-should-use.git $ZSH_CUSTOM/plugins/you-should-use
git clone https://github.com/fdellwing/zsh-bat.git $ZSH_CUSTOM/plugins/zsh-bat

apt update
apt install bat
source ~/.zshrc
```