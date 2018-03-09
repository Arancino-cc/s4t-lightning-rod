# Installation on Docker

Lightning-rod repository [webpage](https://hub.docker.com/r/mdslab/iotronic-lightning-rod/)

MDSLAB Docker Hub [webpage](https://hub.docker.com/r/mdslab/)

## Requirements

* Docker! Follow the official [guides](https://docs.docker.com/install/)

## Get container

* Create a folder in your system to store Lightning-rod settings, </CONFIG/PATH/> (e.g. /etc/iotronic/):
```
sudo mkdir /etc/iotronic/
```

* Get Lightning-rod configuration template file;
```
cd /etc/iotronic/

sudo wget https://raw.githubusercontent.com/MDSLab/s4t-lightning-rod/master/settings.example.json -O settings.json
```

* Edit settings.json
```
cd /tmp/

wget https://raw.githubusercontent.com/MDSLab/s4t-lightning-rod/master/utils/install/docker/configure_LR_docker.sh -O lr_configure.sh

chmod +x lr_configure.sh

lr_configure.sh <BOARD_ID> <WAMP_URL> </CONFIG/PATH/>
```
This script asks the following information:
```
* Board_ID: UUID released by the registration process managed by IoTronic.

* WAMP_URL: ws://<IP> or wss://<IP>
```

* Create container editing the following commands so that </CONFIG/PATH/>
points at the folder that you created in the first step (e.g: /etc/iotronic/):

```
docker run -d -v lr_data:/var/lib/iotronic -v </CONFIG/PATH/>/settings.json:/var/lib/iotronic/settings.json --name=lightning-rod mdslab/iotronic-lightning-rod
```