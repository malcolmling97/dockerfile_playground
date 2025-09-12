Docker is kinda split in a few ways

Building a container

RUN = running during the build process
CMD = when you run docker run, first command to be run

imagine running to be like when you setup your local computer and you install the packages
CMD is like when you actually run it on your localhost to test

Quick notes:
docker container prune -f (force removes containers that are inactive)
docker ps / docker ps - a (list out all containers)
docker images (list out all images)

quick way to find the bash is to go RUN and see where the location for /bin/sh -lc to execute your bash is at

registries doesn't overwriting same tag
local does

docker is essentially bash scripting in simpler forms, split into build time and runtime
e.g. RUN is build time and CMD is during runtime
build time can be perceived as your usual workflow to setup your computer before being able to run your command
runtime is essentailly what you run to activate your service

Next.js:
- long running service?
- nextjs?

Python:
- long running service?
pip freeze > requirements.txt is a good way to take local versions and update it to container
this is useful when taking requirements.txt before copy pasting in dockerfile

npm ci = npm clean install
npm ci --omit=dev ?

General go to images:
- python:3.12
- node:20-alpine
- node-:20-slim