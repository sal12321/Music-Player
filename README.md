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
  🔬 Learning by building real-world fullstack and backend projects<br>
  📬 Contact: <a href="mailto:aaqibalam291@gmail.com">aaqibalam291@gmail.com</a>
</p>
<h2 align="center">🛠️ Tech Stack</h2>

<p align="center">
  <img title="Java" height="30" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/java-original.svg">&nbsp;&nbsp;
  <img title="Spring Boot" height="35" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/springboot.svg">&nbsp;&nbsp;
  <img title="MongoDB" height="34" src="https://raw.githubusercontent.com/sal12321/images/main/aaqibAlam/images/mongodb.svg">
</p>

# 📖 JournalApp – Spring Boot \& MongoDB

A simple backend service for creating, listing, retrieving, and deleting journal entries. Built for learning Spring Data and MongoDB integration in Java!

### 💡 Features

- 📝 Add new journal entries to MongoDB
- 📑 List all journal entries
- 🔍 Retrieve a journal entry by ID
- ❌ Delete a journal entry by ID
- 🌱 Simple and easy-to-understand codebase, perfect for students


### 🚀 Getting Started

1. **Clone this repository:**

```bash
git clone https://github.com/yourusername/journalApp.git
cd journalApp
```

2. **Check MongoDB is running**
    - Uses `localhost:27017` and `journaldb` by default (change in `application.properties` if needed).
3. **(Optional) Edit your `application.properties`:**

```properties
spring.application.name=journalApp
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=journaldb
#spring.data.mongodb.username=myjournaluser
#spring.data.mongodb.password=password
```

4. **Run the application:**

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```


### 📦 Project Structure

```
journalApp/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── salAce/
│       │           └── journalApp/
│       │               ├── entity/
│       │               │   └── JournalEntry.java
│       │               ├── repo/
│       │               │   └── JournalEntryRepo.java
│       │               └── service/
│       │                   └── JournalEntryService.java
│       └── resources/
│           └── application.properties
├── .gitignore
├── README.md
└── pom.xml
```


### 🧪 Running Tests

- Includes simple context load test in `JournalAppApplicationTests.java`.


### 🚦 Endpoints (Concept)

- `POST /entries` – Add a journal entry
- `GET /entries` – List all entries
- `GET /entries/{id}` – Get entry by id
- `DELETE /entries/{id}` – Delete entry by id

(*Implement controller as needed!*)



### 🧠 Future Improvements

- Add authentication
- Create RESTful APIs for CRUD operations
- Build a frontend (React/Angular/Vue) for journal entry management
- Add unit and integration tests

<p align="center">
  Made with ❤️ by <a href="https://github.com/sal12321">Aaqib Alam</a>
</p>
<h2 align="center">🚀 More Projects by Aaqib Alam</h2>

<p align="center">
  <a href="https://github.com/sal12321?tab=repositories">🔍 Explore My GitHub Portfolio</a>
</p>


https://raw.githubusercontent.com/sal12321/images/

