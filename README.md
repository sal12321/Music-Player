
<h3 align="center">Hi, I'm Aaqib 👋</h3>

<h5 align="center">
  <code>
    <a href="https://www.linkedin.com/in/aaqib-alam-50929a204/" title="LinkedIn">
      <img title="linkedIn" height="30" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/github.svg"> LinkedIn
    </a>
  </code>
</h5>

<p align="center">
  Welcome to the JournalApp – a Spring Boot + MongoDB application for managing personal journal entries.<br>
  <br>
  🎓 Computer Engineering @ Amity University<br>
  💻 Focused on building robust, maintainable Java backend apps<br>
  🔬 Learning by building real-world full-stack and backend projects<br>
  📬 Contact: <a href="mailto:aaqibalam291@gmail.com">aaqibalam291@gmail.com</a>
</p>

---

<h2 align="center">🛠️ Tech Stack</h2>

<p align="center">
  <img title="Java" height="30" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/java-original.svg">&nbsp;&nbsp;
  <img title="Spring Boot" height="35" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/springboot.svg">&nbsp;&nbsp;
  <img title="MongoDB" height="34" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/mongodb.svg">
</p>

---

# 📖 JournalApp – Spring Boot & MongoDB

A simple backend service for creating, listing, retrieving, and deleting journal entries. Built to practice Spring Data and MongoDB integration in Java!

---

### 💡 Features

- 📝 Add new journal entries to MongoDB  
- 📑 List all journal entries  
- 🔍 Retrieve a journal entry by ID  
- ❌ Delete a journal entry by ID  
- 🌱 Clean, beginner-friendly codebase  

---

### 🚀 Getting Started

1. **Clone this repository**

```bash
git clone https://github.com/yourusername/journalApp.git
cd journalApp
```

2. **Ensure MongoDB is running**  
Default: `localhost:27017`, database `journaldb` (edit in `application.properties` if needed).

3. **(Optional) Update `application.properties`**

```properties
spring.application.name=journalApp
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=journaldb
#spring.data.mongodb.username=myjournaluser
#spring.data.mongodb.password=password
```

4. **Run the app**

```bash
./mvnw spring-boot:run
# or
mvn spring-boot:run
```

---

### 📦 Project Structure

```
journalApp/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/salAce/journalApp/
│       │       ├── entity/ → JournalEntry.java
│       │       ├── repo/ → JournalEntryRepo.java
│       │       └── service/ → JournalEntryService.java
│       └── resources/
│           └── application.properties
├── .gitignore
├── README.md
└── pom.xml
```

---

### 🧪 Tests
- Simple context-load test in `JournalAppApplicationTests.java`.

---

### 🚦 Conceptual Endpoints

| Method | Path            | Purpose                |
|--------|------------------|------------------------|
| POST   | `/entries`       | Create a journal entry |
| GET    | `/entries`       | List all entries       |
| GET    | `/entries/{id}`  | Retrieve entry by ID   |
| DELETE | `/entries/{id}`  | Delete entry by ID     |

*(Add a controller layer to expose these routes.)*

---

### 🗂️ .gitignore Sample

```
/target/
*.iml
.idea/
*.classpath
*.project
*.settings/
.DS_Store
Thumbs.db
logs/
*.log
.env
```

---

### 🧠 Future Improvements

- Authentication & authorization  
- Full CRUD REST API controllers  
- React/Vue/Angular frontend  
- Unit & integration tests  

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/sal12321">Aaqib Alam</a>
</p>

---

<h2 align="center">🚀 More Projects by Aaqib Alam</h2>
<p align="center">
  <a href="https://github.com/sal12321?tab=repositories">🔍 Explore My GitHub Portfolio</a>
</p> 
