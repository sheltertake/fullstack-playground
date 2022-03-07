# Install WSL on win 10
Run in PS:
```cmd
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
 
```cmd
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

 - Install this update https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
 - reboot
 - set WSL vers.2 as default, run in PS:

```cmd
wsl --set-default-version 2
```

 - Install Ubuntu and windows terminal from Microsoft store

 - (Ubuntu first run) open wsl.exe from search bar OR open windows terminal Ubuntu
 - set a username and password for Ubuntu

# Install docker on WSL2 Ubuntu 20.04
 - open wsl
 - update packages

```bash
sudo apt-get update

sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release

```
 - Add official GPG key

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

 - Setup repo

```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

```

 - Install docker engine

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose
```

Set autostart for dockerd

sudo visudo
add this line

<user_name> ALL=(ALL) NOPASSWD: /usr/bin/dockerd

where <user_name> is the user name setup in Ubuntu

Run in bash:

```bash
echo '# Start Docker daemon automatically when logging in if not running.' >> /etc/bash.bashrc
echo 'RUNNING=`ps aux | grep dockerd | grep -v grep`' >> /etc/bash.bashrc
echo 'if [ -z "$RUNNING" ]; then' >> /etc/bash.bashrc
echo ' sudo dockerd > /dev/null 2>&1 &' >> /etc/bash.bashrc
echo ' disown' >> /etc/bash.bashrc
echo 'fi' >> ~/.bashrc
```

 - Run in bash:

```bash
sudo usermod -a -G docker $USER
```

 - Test docker

```bash
docker run hello-world
```