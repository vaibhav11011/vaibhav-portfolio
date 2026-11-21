export const siteConfig = {
  name: "Vaibhav Kumar",
  title: "Java Backend Engineer",
  headline: "Engineering Reliable Backend Systems with Java & Spring Boot",
  description: "Java Backend Engineer specializing in Spring Boot, REST APIs, PostgreSQL, and enterprise-scale backend development. Building robust eGovernance solutions and data-driven applications.",
  email: "vk01398@gmail.com",
  phone: "+91 8307079724",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/vaibhav-kumar-98a9ab185/",
  github: "",
  resumePath: "/resume.pdf",
  url: "https://vaibhavkumar.dev",
};

export const aboutData = {
  intro: `I'm a Java Backend Engineer based in Delhi, India, focused on building reliable, maintainable backend systems for enterprise applications. My work centers on Java, Spring Boot, REST APIs, and relational databases — the core technologies that power business-critical software.`,
  journey: `My engineering journey began with a B.Tech in Information Technology from Panipat Institute of Engineering & Technology, followed by specialized training in Advanced Computing (PG-DAC) at CDAC Noida. I started my professional career at Wipro Limited as a Project Engineer, where I built Java backend services and worked with Spring Boot, MySQL, and JPA/Hibernate across controller-service-repository architectures.`,
  current: `Currently, I work at Sparrow Softech as a Java Backend Engineer, developing enterprise-scale eGovernance solutions on the UPYOG platform. My daily work involves designing secure backend services, optimizing database queries, building REST APIs, and implementing workflow automation using Java, Spring Boot, PostgreSQL, and Apache Kafka.`,
  philosophy: [
    "Understanding business requirements before writing code",
    "Writing maintainable, well-structured backend code",
    "Building reliable API contracts and data validation",
    "Handling edge cases and debugging real-world production issues",
    "Continuous learning and professional growth",
  ],
};

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "current" | "previous";
  projects?: string[];
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "sparrow",
    company: "Sparrow Softech Pvt. Ltd.",
    role: "Java Backend Engineer",
    period: "Apr 2026 – Present",
    location: "Delhi, India",
    type: "current",
    projects: ["DJB eKYC Platform", "Water Tanker Management System"],
    highlights: [
      "Designing secure backend services using Java, Spring Boot, PostgreSQL, Kafka, and REST APIs for enterprise eGovernance workflows",
      "Optimizing PostgreSQL queries and pagination for high-volume data processing workflows",
      "Implementing authorization mechanisms including hierarchy-aware access control and token-based validation",
      "Developing Kafka consumers and Flyway database migrations for asynchronous processing and schema evolution",
      "Building workflow automation, bulk assignment, hierarchy reporting, and advanced search APIs",
      "Resolving production issues across Spring Boot, PostgreSQL, Kafka, and Kubernetes while maintaining backward compatibility",
      "Collaborating with Product, QA, and DevOps teams on feature delivery and issue resolution",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "REST APIs", "Flyway", "Keycloak", "Kubernetes", "Maven", "Git"],
  },
  {
    id: "wipro",
    company: "Wipro Limited",
    role: "Project Engineer",
    period: "Dec 2021 – Jan 2025",
    location: "Bengaluru, India",
    type: "previous",
    highlights: [
      "Developed and modified Java backend code using Spring Boot REST APIs for CRUD operations and assigned application requirements",
      "Worked across Controller, Service, and Repository layers to implement request handling, business logic, validation, and exception handling",
      "Integrated backend APIs with MySQL using JPA/Hibernate and SQL queries for relational database operations",
      "Used Maven for project builds and dependency management, and Postman for manual REST API testing",
      "Committed and pushed code changes using Git; collaborated on debugging, code reviews, and issue resolution",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "REST APIs", "SQL", "Maven", "Postman", "Git"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "professional" | "academic";
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  domain: string;
  hasDetailPage: boolean;
}

export const projects: Project[] = [
  {
    id: "djb-ekyc",
    title: "DJB eKYC Platform",
    subtitle: "Enterprise eGovernance Application",
    category: "professional",
    domain: "eGovernance / Citizen Verification",
    description: "A backend-focused eGovernance application involving citizen verification workflows, role-based authorization, and multiple operational workflows. Built on the UPYOG platform for enterprise-scale operations.",
    role: "Java Backend Engineer — API development, data validation, workflow implementation, database optimization, and backend debugging",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Flyway", "Keycloak", "REST APIs", "MDMS", "Maven"],
    highlights: [
      "Backend API development for citizen-related verification workflows",
      "Data validation and consumer information management",
      "Application status management and assignment workflows",
      "Role-based workflow implementation across multiple operational roles",
      "Search and dashboard functionality with optimized database queries",
      "API integration with external services",
      "Exception handling and backend debugging",
    ],
    hasDetailPage: true,
  },
  {
    id: "water-tanker",
    title: "Water Tanker Management",
    subtitle: "Professional Project Exposure",
    category: "professional",
    domain: "Public Utilities / Water Management",
    description: "A professional project within the eGovernance ecosystem focused on water tanker management operations. Contributed to backend development as part of the engineering team.",
    role: "Java Backend Engineer — Backend development contributions within the broader engineering team",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    highlights: [
      "Backend development for public utility management workflows",
      "Contributing to enterprise-scale application features",
      "Working within the UPYOG platform architecture",
    ],
    hasDetailPage: false,
  },
  {
    id: "retailease",
    title: "RetailEase",
    subtitle: "Retail Billing & Inventory Management System",
    category: "academic",
    domain: "Retail / Billing & Inventory",
    description: "A retail management application with admin panel, sales staff panel, product management, billing, sales tracking, and invoice/receipt generation. Developed as a team project with a React.js frontend and Spring Boot backend.",
    role: "Backend Developer — REST API development, database design, and business logic implementation",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React.js", "REST APIs", "Maven"],
    highlights: [
      "RESTful backend services for billing and inventory workflows",
      "Controller-Service-Repository architecture implementation",
      "CRUD functionality for products, orders, and sales data",
      "Entity relationships and database interaction design",
      "Business logic for billing calculations and inventory management",
      "API integration with React.js frontend",
    ],
    hasDetailPage: true,
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  level: "core" | "working" | "familiar";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Java",
    icon: "coffee",
    level: "core",
    skills: ["Core Java", "OOP", "Collections Framework", "Exception Handling", "Java 8+ Features", "Streams API", "Lambda Expressions", "Multithreading"],
  },
  {
    title: "Spring Ecosystem",
    icon: "leaf",
    level: "core",
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "Dependency Injection", "Layered Architecture", "Validation & Exception Handling"],
  },
  {
    title: "Databases",
    icon: "database",
    level: "core",
    skills: ["PostgreSQL", "MySQL", "SQL", "Joins & Indexing", "Database Relationships", "Transactions", "Query Development", "Flyway Migrations"],
  },
  {
    title: "Messaging & Integration",
    icon: "radio",
    level: "working",
    skills: ["Apache Kafka", "Kafka Consumers", "Asynchronous Processing", "Event-Driven Patterns"],
  },
  {
    title: "Security",
    icon: "shield",
    level: "working",
    skills: ["Spring Security", "JWT", "Keycloak", "Token-Based Auth", "Role-Based Access Control"],
  },
  {
    title: "DevOps & Tools",
    icon: "wrench",
    level: "working",
    skills: ["Git", "Maven", "Kubernetes", "Postman", "IntelliJ IDEA", "VS Code", "pgAdmin"],
  },
  {
    title: "Frontend",
    icon: "monitor",
    level: "familiar",
    skills: ["React.js", "JavaScript", "HTML", "CSS"],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  type: "postgraduate" | "undergraduate";
}

export const education: Education[] = [
  {
    degree: "PG-DAC (Advanced Computing)",
    institution: "Centre for Development of Advanced Computing (CDAC), Noida",
    period: "2025 – 2026",
    type: "postgraduate",
  },
  {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "Panipat Institute of Engineering & Technology",
    period: "2017 – 2021",
    type: "undergraduate",
  },
];

export const learningTopics = [
  { topic: "Advanced Java Internals", category: "language" },
  { topic: "Spring Boot Deep Dive", category: "framework" },
  { topic: "Microservices Architecture", category: "architecture" },
  { topic: "System Design Fundamentals", category: "architecture" },
  { topic: "Database Performance Optimization", category: "database" },
  { topic: "Data Structures & Algorithms", category: "fundamentals" },
  { topic: "Software Design Principles", category: "fundamentals" },
  { topic: "Distributed Systems Concepts", category: "architecture" },
];

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  context: string;
  investigation: string;
  rootCause: string;
  solution: string;
  implementation: string;
  lessons: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "api-exception-handling",
    title: "Designing Consistent API Error Responses",
    problem: "Backend APIs returned inconsistent error formats — some returned plain text messages, others returned stack traces, making it difficult for frontend teams to handle errors reliably.",
    context: "In a Spring Boot application with multiple controllers and service layers, exceptions from different sources (validation failures, database errors, business rule violations) were handled inconsistently.",
    investigation: "Reviewed existing controllers and identified that some used try-catch blocks returning ad-hoc error strings, while others let exceptions propagate unhandled. The frontend team reported difficulty parsing error responses.",
    rootCause: "No centralized exception handling strategy. Each controller handled (or didn't handle) errors independently, resulting in varied response formats and HTTP status codes.",
    solution: "Implemented a global exception handler using @RestControllerAdvice with structured error response DTOs. Defined custom exception classes for business-specific errors and mapped each to appropriate HTTP status codes.",
    implementation: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidation(
            ValidationException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}`,
    lessons: [
      "Centralized exception handling reduces code duplication and improves consistency",
      "Structured error DTOs make API contracts clearer for consumers",
      "Custom exception classes make business logic more readable",
      "Proper HTTP status code usage helps API consumers handle errors correctly",
    ],
  },
  {
    id: "null-field-investigation",
    title: "Investigating Null Fields in API Responses",
    problem: "Certain API responses intermittently returned null values for fields that should always be populated, causing issues downstream.",
    context: "A Spring Boot service fetched data from a relational database using JPA entities and returned DTOs. Some fields appeared null in the response despite having values in the database.",
    investigation: "Traced the data flow from database → JPA entity → DTO mapping. Checked the entity field mappings, the DTO conversion logic, and the actual database records.",
    rootCause: "The DTO mapping logic used manual field-by-field copying, and a recently added database column was mapped in the entity but not in the DTO conversion method. Additionally, a lazy-loaded relationship was accessed outside the transaction boundary.",
    solution: "Updated the DTO mapping to include all required fields. Ensured that lazy-loaded relationships were either eagerly fetched in the query or accessed within the transactional boundary using @Transactional on the service method.",
    implementation: `// Before — missing field in DTO mapping
public UserDTO toDTO(UserEntity entity) {
    UserDTO dto = new UserDTO();
    dto.setName(entity.getName());
    dto.setEmail(entity.getEmail());
    // department was missing!
    return dto;
}

// After — complete mapping with eager fetch
@Transactional(readOnly = true)
public UserDTO getUserById(Long id) {
    UserEntity entity = userRepository
        .findByIdWithDepartment(id)  // JOIN FETCH
        .orElseThrow(() -> new ResourceNotFoundException(
            "User not found: " + id));
    return toDTO(entity);
}

public UserDTO toDTO(UserEntity entity) {
    UserDTO dto = new UserDTO();
    dto.setName(entity.getName());
    dto.setEmail(entity.getEmail());
    dto.setDepartment(entity.getDepartment().getName());
    return dto;
}`,
    lessons: [
      "Always verify DTO mappings when adding new entity fields",
      "Lazy loading exceptions can manifest as null values rather than errors",
      "JOIN FETCH or @EntityGraph can prevent N+1 and lazy loading issues",
      "Tracing the complete data flow (DB → Entity → DTO → Response) is essential for debugging",
    ],
  },
  {
    id: "query-optimization",
    title: "Optimizing Slow Database Queries for Pagination",
    problem: "An API endpoint serving paginated data became progressively slower as the dataset grew, with response times exceeding acceptable limits on later pages.",
    context: "A Spring Data JPA repository used OFFSET-based pagination on a table with a growing number of records. The query included multiple joins and sorting.",
    investigation: "Analyzed the generated SQL query and found that OFFSET-based pagination was scanning all preceding rows. The query plan showed a sequential scan instead of using the available index due to the complex sort order.",
    rootCause: "OFFSET-based pagination with large offsets requires the database to process and discard all rows before the offset. Combined with an unoptimized sort order that couldn't leverage existing indexes, this caused O(n) performance degradation.",
    solution: "Replaced OFFSET pagination with keyset (cursor-based) pagination for the heaviest endpoints. Added a composite index matching the sort order. For endpoints where OFFSET was retained, added appropriate indexes and limited the maximum page depth.",
    implementation: `-- Before: OFFSET-based (slow on large offsets)
SELECT * FROM consumers
ORDER BY created_date DESC, id DESC
OFFSET 50000 LIMIT 20;

-- After: Keyset pagination (consistent performance)
SELECT * FROM consumers
WHERE (created_date, id) < (?, ?)
ORDER BY created_date DESC, id DESC
LIMIT 20;

-- Supporting composite index
CREATE INDEX idx_consumers_date_id
ON consumers (created_date DESC, id DESC);`,
    lessons: [
      "OFFSET pagination degrades with large datasets — keyset pagination provides consistent performance",
      "Database indexes must match the query's ORDER BY clause for optimal performance",
      "EXPLAIN ANALYZE is essential for understanding query performance",
      "Consider the data growth trajectory when choosing pagination strategies",
    ],
  },
];

export const engineeringTopics = {
  java: {
    title: "Java Engineering",
    icon: "coffee",
    topics: [
      {
        name: "Object-Oriented Programming",
        explanation: "Java's OOP model organizes code into classes and objects, using encapsulation, inheritance, polymorphism, and abstraction to build maintainable software.",
        relevance: "Every Spring Boot service is built on OOP principles — entities, services, and controllers are all Java classes with clear responsibilities.",
      },
      {
        name: "Collections Framework",
        explanation: "Java Collections (List, Set, Map, Queue) provide data structures for storing and manipulating groups of objects with well-defined performance characteristics.",
        relevance: "Backend services constantly work with collections — processing lists of database records, maintaining lookup maps, and managing ordered data sets.",
      },
      {
        name: "Streams & Lambda Expressions",
        explanation: "Java 8 Streams provide a functional approach to processing collections, enabling operations like filter, map, and reduce with cleaner, more declarative code.",
        relevance: "Transforming database results into DTOs, filtering records based on criteria, and aggregating data are common backend tasks simplified by Streams.",
      },
      {
        name: "Exception Handling",
        explanation: "Java's try-catch-finally mechanism, combined with custom exceptions, provides structured error handling across application layers.",
        relevance: "Backend services must handle database errors, validation failures, and external service timeouts gracefully without exposing internal details.",
      },
    ],
  },
  spring: {
    title: "Spring Boot Engineering",
    icon: "leaf",
    topics: [
      {
        name: "Dependency Injection & IoC",
        explanation: "Spring's IoC container manages object creation and dependency wiring. Components declare their dependencies, and Spring injects them automatically.",
        relevance: "DI enables loose coupling between services, repositories, and controllers — making code testable and modular.",
      },
      {
        name: "Controller-Service-Repository",
        explanation: "A layered architecture pattern where Controllers handle HTTP requests, Services contain business logic, and Repositories manage data access.",
        relevance: "This pattern provides clear separation of concerns — each layer has a single responsibility, making the codebase easier to maintain and debug.",
      },
      {
        name: "Spring Data JPA & Hibernate",
        explanation: "Spring Data JPA abstracts database operations through repository interfaces, while Hibernate handles the ORM mapping between Java objects and database tables.",
        relevance: "Most backend CRUD operations are implemented through JPA repositories, with custom queries for complex data access patterns.",
      },
      {
        name: "REST Request Lifecycle",
        explanation: "An HTTP request flows through filters, the DispatcherServlet, handler mappings, interceptors, the controller method, and response serialization.",
        relevance: "Understanding this lifecycle is essential for debugging request issues, implementing cross-cutting concerns, and optimizing response handling.",
      },
    ],
  },
  database: {
    title: "Database Engineering",
    icon: "database",
    topics: [
      {
        name: "SQL Joins & Relationships",
        explanation: "SQL joins (INNER, LEFT, RIGHT, FULL) combine rows from multiple tables based on related columns, reflecting entity relationships in the data model.",
        relevance: "Enterprise applications involve complex data models — joining customer records with their orders, assignments with their statuses, and users with their roles.",
      },
      {
        name: "Indexing & Query Performance",
        explanation: "Database indexes are data structures that speed up data retrieval. Proper indexing strategy balances read performance against write overhead.",
        relevance: "High-volume applications require carefully designed indexes to maintain acceptable query response times as data grows.",
      },
      {
        name: "Transactions & Data Integrity",
        explanation: "Database transactions ensure ACID properties — Atomicity, Consistency, Isolation, and Durability — protecting data integrity across multiple operations.",
        relevance: "Financial calculations, status updates, and multi-table operations must be transactional to prevent partial updates and data corruption.",
      },
    ],
  },
  api: {
    title: "REST API Engineering",
    icon: "globe",
    topics: [
      {
        name: "HTTP Methods & Status Codes",
        explanation: "REST APIs use HTTP methods (GET, POST, PUT, DELETE, PATCH) semantically, and return appropriate status codes (200, 201, 400, 404, 500) to communicate outcomes.",
        relevance: "Consistent use of HTTP semantics makes APIs predictable and easier for frontend teams and external consumers to integrate with.",
      },
      {
        name: "Request Validation",
        explanation: "Input validation ensures that API requests contain valid, expected data before processing. Spring's @Valid annotation with Jakarta Bean Validation handles this declaratively.",
        relevance: "Every API endpoint must validate incoming data to prevent invalid records, security issues, and downstream processing errors.",
      },
      {
        name: "Pagination & Filtering",
        explanation: "APIs serving large datasets must support pagination (page-based or cursor-based) and filtering to allow clients to retrieve manageable subsets of data.",
        relevance: "Enterprise APIs often serve thousands to millions of records — efficient pagination and filtering are essential for usable, performant endpoints.",
      },
    ],
  },
};

