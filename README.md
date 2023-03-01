# 헬스기록앱

docker build . -t health-backend

docker container run -d -p 3000:3000 health-backend
