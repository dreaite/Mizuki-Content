---
title: 'Install oh-my-zsh and Its Components on Ubuntu'
published: 2024-12-03
updated: 2024-12-03
description: 'Installing oh-my-zsh and its components on Ubuntu includes first installing zsh and git, then installing oh-my-zsh via wget. Next, clone the powerlevel10k theme and required plugins, and update the .zshrc file to apply the theme and plugins. Finally, install additional plugins such as zsh-bat and you-should-use, and update the system to ensure everything works properly.'
image: 'https://r2.dreaife.tokyo/notion/covers/1515465cca178073b194f4ade9c3a703/IMG_1723.jpg'
tags: ['bash', 'linux']
category: 'prog-side'
draft: false
lang: 'en'
---

# install zsh


```shell
sudo apt install -y zsh git || sudo pacman -S --needed zsh git || sudo yum install zsh git || sudo zypper in zsh git || sudo apk add zsh git;
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)" &&
zsh
```


# install theme


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


# install pulgins


plugins:


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