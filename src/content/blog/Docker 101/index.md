---
title: "Docker 101: A Practical Introduction for Beginners"
description: "A comprehensive, hands-on guide to Docker basics, commands, and real-world usage, including working with Python and Flask. Perfect for students and developers starting with containers."
pubDate: 2024-08-13
author: "M1NDB3ND3R"
tags: ["docker", "containers", "devops", "tutorial", "beginner", "flask", "python"]
---

# Introduction to Docker

## Basic Commands :
<img src="https://github.com/user-attachments/assets/f6292b07-5c72-412a-adc2-02ffa31477ab" alt="Docker Logo" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Check version of Docker
```bash
docker version
```

<img src="https://github.com/user-attachments/assets/7f4d98b9-dd36-4a32-b08d-045d5af5318c" alt="Docker Version" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Display system-wide information 
```bash
docker info
```

<img src="https://github.com/user-attachments/assets/cd99ad50-4f37-43b4-8e9c-82490cf2f466" alt="Docker Info" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Docker Help
```bash
docker --help
```
<img src="https://github.com/user-attachments/assets/ea62e101-6166-4676-ae96-601630f41b59" alt="Docker Help" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To login to Hub.docker.com ( Docker Registry )
```bash
docker login
```

<img src="https://github.com/user-attachments/assets/37d92a50-2c47-4cc5-979a-04dddd54e489" alt="Docker Login" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To search a image in Registry ( `hub.docker.com` )
```bash
docker search <image>
```
<img src="https://github.com/user-attachments/assets/67aa8499-6a6e-4ad0-baf4-dbad8951aaf0" alt="Docker Search" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To Pull a image from Registry ( `hub.docker.com` )
```bash
docker pull <images>
```
<img src="https://github.com/user-attachments/assets/e388c026-290e-449c-ae4e-20b3798846bb" alt="Docker Pull" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To list all the images in our system
```bash
docker images
```
<img src="https://github.com/user-attachments/assets/cd1d0fff-1653-4967-9d4a-543a6e81c744" alt="Docker Images" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />


### To Remove a Image 
```bash
docker rmi <image_name>
```
<img src="https://github.com/user-attachments/assets/7ad92323-0840-42af-9062-11a55f300762" alt="Docker Remove Image" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To View Running Container
> Use flag : `-a` to view all container including stopped

```bash
docker ps
```
<img src="https://github.com/user-attachments/assets/e47ec772-e31b-4775-a5b0-4fba6b84d194" alt="Docker PS" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Pulling nginx container

```bash
docker search nginx
docker pull nginx
```
<img src="https://github.com/user-attachments/assets/225fff31-21f2-4fd0-bd6f-2a9679df0a2a" alt="Docker Search and Pull" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Create a container from image or run a image as container
> Flag : `-i` -> iteractive\
> Flag : `-d` -> detached\
> Flag : `-t` -> teletypewriter (`tty`)\
> Flag : `-p` -> port mapping

```bash
docker run -itd <image>
docker run -itd <image> --name <container_name>
```

<img src="https://github.com/user-attachments/assets/1cc49729-8312-4ef2-8b9e-9ca3f8838228" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />


<img src="https://github.com/user-attachments/assets/ef2a1b7d-f391-492c-8f80-279a36b526bc" alt="Docker Run with Name" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To Stop a running Container

```bash
docker stop <container-id>
```
<img src="https://github.com/user-attachments/assets/ff59ae4f-911f-4eef-bda7-6c152eea8f3b" alt="Docker Stop" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/724ea4d1-d924-4bab-bc28-1fbf7edc066e" alt="Docker Stop" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To Restart a Container
```bash
docker restart <container-id>
```
<img src="https://github.com/user-attachments/assets/9b48d575-621b-4a78-8f77-1c618cd7a439" alt="Docker Restart" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To Start a Container
```bash
docker start <container-id>
```
<img src="https://github.com/user-attachments/assets/dfaa31be-a8fa-4c96-a219-e7f02928ee08" alt="Docker Start" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To remove a container
```bash
docker rm <container-id>
```
<img src="https://github.com/user-attachments/assets/ca3e0769-ad99-474a-a969-ab42f65da8c4" alt="Docker Remove Container" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To View a log of container
```bash
docker logs <container-id>
```
<img src="https://github.com/user-attachments/assets/94625dc8-1024-41d7-85f1-2d2839a52410" alt="Docker Logs" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Port Mapping in Docker Container with system

```bash
docker run -itd -p <host-port>:<container-port> <image> 
```
<img src="https://github.com/user-attachments/assets/86b9dbd0-d8b5-4fee-b683-ef41796cb423" alt="Docker Port Mapping" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/e91ee8c2-bf21-4b73-b8b2-632a0aa8b396" alt="Docker Port Mapping" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/25b5ba38-a26f-4fd3-9012-51bbdb4ce51f" alt="Docker Port Mapping" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To inspect a docker image

```bash
docker inspect <image name>
```
<img src="https://github.com/user-attachments/assets/1e2e15e2-3555-4256-a965-aff3093cdd73" alt="Docker Inspect" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To save a image as tar file
```bash
docker save -o <tar file name> <image name>
```
<img src="https://github.com/user-attachments/assets/74948de3-5741-47a4-9c36-e404d9779267" alt="Docker Save" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To unzip or load unzipped file
```bash
docker load -i <Tar file name>
```

<img src="https://github.com/user-attachments/assets/ae25db22-8fa4-4f12-93f2-76980d4377c0" alt="Docker Load" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To execute a container
```bash
docker exec -it <Container-ID> /bin/bash
```
<img src="https://github.com/user-attachments/assets/1fe4a5a2-a6d5-4217-b393-bab93e082a23" alt="Docker Exec" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To rename a Container
```bash
docker rename <old_name> <new_name>
```

<img src="https://github.com/user-attachments/assets/3da7950b-7fe7-4588-aec0-d5b55bfaf499" alt="Docker Rename" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To view history of image
```bash
docker history <image name>
```
<img src="https://github.com/user-attachments/assets/011dd628-e40e-4877-9520-25c21e034884" alt="Docker History" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />


### System prune ( remove everything )
```bash
docker system prune
```
<img src="https://github.com/user-attachments/assets/919d41d8-9826-4596-a7ef-6b0e6be45254" alt="Docker System Prune" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### logout from hub.docker.com
```bash
docker logout
```
<img src="https://github.com/user-attachments/assets/91e1da4b-4f8a-4135-95a3-dea676bf1a3c" alt="Docker Logout" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

## Working with python and flask

### Simple Program to learn routing

#### Create a env and install dependencies
```bash
python3 -m venv .env
source .env/bin/activate

.\.env\Script\activate // For windows
pip install -U pip
pip install flask
```
#### app.py
```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def main():
    return "Student Detail"


@app.route("/getdetail")
def get_detail():
    return "7376221CS334 - THARUN D V"


if __name__ == "__main__":
    app.run(debug=True)
```
<img src="https://github.com/user-attachments/assets/e024f552-d491-4357-8677-19ca5e816646" alt="Docker Python Environment" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

#### To run flask application 
```bash
python3 app.py
```
<img src="https://github.com/user-attachments/assets/c958f357-5ea9-4bc3-8ea1-53835675cacc" alt="Docker Flask Application" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

<img src="https://github.com/user-attachments/assets/035c902f-843d-404e-9d0a-f021d1969fd2" alt="Docker Flask Application" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

<img src="https://github.com/user-attachments/assets/9be7b1df-5496-491d-957d-5fa4016f24f4" alt="Docker Flask Application" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/150709ad-9af3-4d7b-ade3-1f2bdf53ef17" alt="Docker Flask Application" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/aee87b16-7e8f-44c0-9f44-33bf5e512b8e" alt="Docker Flask Application" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### learning to write docker file and converting above simple flask code to docker images and creating a container

#### Basics of Dockerfile
<img src="https://github.com/user-attachments/assets/73461dc8-512d-44b0-84bc-0dc2933df298" alt="Dockerfile" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

#### Writing a Docker file for above flask app

```Dockerfile
FROM python:3.9-alpine
MAINTAINER "THARUN-DV"
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
ENV FLASK_APP=app.py
CMD ["flask" , "run", "--host","0.0.0.0"]
```
<img src="https://github.com/user-attachments/assets/a06af775-9811-476c-8061-6cf7c9b3faf7" alt="Dockerfile" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

#### Building the Dockerfile
```bash
docker build -t <image_name> <path to Dockerfile>
```
<img src="https://github.com/user-attachments/assets/d28be83c-caa0-40bc-8064-acc439a512a4" alt="Docker Build" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/6b4280a3-5708-48cc-a479-f387697c0867" alt="Docker Build" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

#### Create a container using the above image

```bash
docker run -itd -p 80:5000 <image_name>
```

<img src="https://github.com/user-attachments/assets/e267fc40-0066-4362-85b2-17081d35ce59" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/72187c76-4d40-44a9-9d25-97b790d07e18" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/274b330f-19f6-47da-896a-de2e371e3ea8" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

#### Pushing the image to registry ( `hub.docker.com` )

```bash
docker push <image_name>
```
<img src="https://github.com/user-attachments/assets/841bc606-83c5-4ac5-84ec-9d2be63b9c75" alt="Docker Push" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

<img src="https://github.com/user-attachments/assets/ea78bdde-ec2b-49f5-b70f-9b12136701f8" alt="Docker Push" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

## Testing Other docker images : 

### Pulling a Docker images 
```bash
docker pull m1ndb3nd3r/flask-hello
```
<img src="https://github.com/user-attachments/assets/c923ab5a-eed4-4db6-bc1b-a5f207eedf6c" alt="Docker Pull" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />


### create a container exposing host post 80 and container 3000

- since I use arm based machine cannot pull and run x86 or x64 based images so pulled my own image and executed
```bash
docker run -itd -p 80:5000 m1ndb3nd3r/flask-hello
```
<img src="https://github.com/user-attachments/assets/c2bdd632-e39c-401d-905a-1887028778d1" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/d3461d05-0696-4fc6-a618-870bee3511ab" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/e590d924-eb15-40b7-affa-1d9475855c69" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

- Flask application executed successfully

## Docker Compose 
[[https://www.programonaut.com/wp-content/uploads/2021/07/docker-compose-cheat-sheet.pdf]]
<img src="https://github.com/user-attachments/assets/b52d74cf-34d0-43a4-b53e-1edc2769abc3" alt="Docker Compose" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />
<img src="https://github.com/user-attachments/assets/427dbd48-0acf-4500-9804-b80b1b05ed51" alt="Docker Compose" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Check docker compose version
```bash
docker compose version
```

<img src="https://github.com/user-attachments/assets/54faaab7-6b98-4391-af46-c9eff5249a8b" alt="Docker Compose Version" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Creating a docker compose file 
```yml
version: "3"
services:
  nginx:
    image: "nginx:latest"
    container_name: nginx_container
    restart: always
    ports:
      - "7777:80"
  httpd:
    image: "httpd:latest"
    container_name: httpd_container
    restart: always
    ports:
      - "8888:80"
```
<img src="https://github.com/user-attachments/assets/fdcb13b8-ee07-4b8d-9ce5-2f96288074f5" alt="Docker Compose File" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Create and start containers

```bash
docker compose up
```
> use flag `-d` to run in background
<img src="https://github.com/user-attachments/assets/e27508cc-abea-4f12-b237-c121af1ad5e2" alt="Docker Compose Up" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To list compose containers
```bash
docker compose ps
```
<img src="https://github.com/user-attachments/assets/7d3139ef-97cf-4d0e-9386-ed1bb73eae22" alt="Docker Compose PS" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### To stop compose containers
```bash
docker compose stop 
```
<img src="https://github.com/user-attachments/assets/4d1a8365-4f77-4dc9-bf3b-fa16bf38bbbb" alt="Docker Compose Stop" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### docker compose log
```bash
docker compose logs
```
<img src="https://github.com/user-attachments/assets/f9915aa8-2eec-4d46-9f2a-b5139b1f432a" alt="Docker Compose Logs" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Docker compose restart 
<img src="https://github.com/user-attachments/assets/b45ef411-6a31-4be1-8494-5a70dfd86cfb" alt="Docker Compose Restart" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Stop and remove containers, networks

```bash
docker compose down
```
<img src="https://github.com/user-attachments/assets/78b52f97-2646-4dd9-9b51-78202b4c8068" alt="Docker Compose Down" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

## Dockerize a simple application

### Sample Ml app. (iris data classification using random forest classification algorithm )
```py
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
iris = datasets.load_iris()
X = iris.data
y = iris.target

# Split dataset into training set and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Create a Gaussian Classifier
clf = RandomForestClassifier()

# Train the model using the training sets
clf.fit(X_train, y_train)

# Predict the response for test dataset
y_pred = clf.predict(X_test)

# Model Accuracy, how often is the classifier correct?
print(f"Accuracy: {accuracy_score(y_test, y_pred)}")

# Save the trained model
joblib.dump(clf, 'iris_model.pkl')
print("Model saved!")
```
<img src="https://github.com/user-attachments/assets/94c95c56-eb41-492a-9eb7-d61138b81adf" alt="Docker ML App" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />


### Creating a dockerfile for it
```bash
FROM python:3.9-slim
MAINTAINER "THARUN D V"
WORKDIR /app 
COPY . /app 
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python3","app.py"]
```
<img src="https://github.com/user-attachments/assets/68b62e44-4f9d-498f-8efd-65da6b737e4a" alt="Dockerfile" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Build docker file
```bash
docker build -t <image_name> <path_to_dockerfile>
```
<img src="https://github.com/user-attachments/assets/443aeaf7-6e20-4edf-9ce0-788133743cba" alt="Docker Build" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### login to docker registery
```bash
docker login
```
<img src="https://github.com/user-attachments/assets/9c984749-a638-45ab-9e04-78fbcc986a14" alt="Docker Login" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### Push docker image to hub.docker.com
```bash
docker push <image_name>
```
<img src="https://github.com/user-attachments/assets/ce4c959c-2189-4e7c-ae81-6b0dd7c31ef9" alt="Docker Push" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### create a container using the builded image
```bash
docker run -itd <imagename>
```
<img src="https://github.com/user-attachments/assets/ae72fc7d-4c0f-4bc4-b205-abe546fc2263" alt="Docker Run" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

### view output using logs
```bash
docker logs <container-id>
```
<img src="https://github.com/user-attachments/assets/d7bd67b2-f0b7-4fff-8333-21c8f7e3763c" alt="Docker Logs" style="max-width:100%;height:auto;display:block;margin:1.5rem auto;" />

