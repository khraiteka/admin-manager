## ADMIN MANAGER API
### Note :
- Node 16

### Project Structure :

├─ category-services </br>
├─ datbase </br>
├─ gateway-config </br>
├─ posts-services </br>
├─ users-services </br>
├─.gitignore </br>
├─ docker-compose.yml </br>
└─ README.md </br>


#### 1. Config build env

```
cd ..name-folder..-services
npm install
```
example
```
cd posts-services
npm install
```

#### 2. Run Docker

```
docker-compose up -d
```

#### 3. Test link

```
http://localhost:8000/category
http://localhost:8000/posts
http://localhost:8000/users
```
