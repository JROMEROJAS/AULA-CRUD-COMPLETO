# 🏫 Sistema de Gestión de Aulas

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-brightgreen)](https://spring.io/)
[![Angular](https://img.shields.io/badge/Angular-17+-red)](https://angular.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)](https://www.mysql.com/)

Sistema completo de gestión de aulas universitarias desarrollado con arquitectura full-stack. Permite administrar aulas, sus características y estados de disponibilidad.

## 🚀 Características

### Backend (Spring Boot)
-  **API REST** completa con Spring Boot 
-  **Persistencia** con JPA/Hibernate y MySQL
-  **Validación** de datos y manejo de excepciones
-  **Configuración CORS** para integración con frontend
-  **Arquitectura en capas** (Controller, Service, Repository)

### Frontend (Angular)
-  **Interfaz moderna** con Angular 17 y Bootstrap
-  **Componentes reactivos** y formularios validados
-  **Gestión de estado** con servicios observables
-  **Routing** y navegación entre vistas
-  **Responsive design** para diferentes dispositivos

### Funcionalidades CRUD
-  **Visualizar** listado de aulas con filtros
-  **Crear** nuevas aulas con validación
-  **Editar** información de aulas existentes
-  **Eliminar** aulas con confirmación
-  **Filtrar** por tipo y estado
-  **Interfaz intuitiva** y user-friendly

## 🛠️ Tecnologías Utilizadas

### Backend
- **Java 21** - Lenguaje de programación
- **Spring Boot 3.5.7** - Framework principal
- **Spring Data JPA** - Persistencia de datos
- **MySQL 8.0** - Base de datos relacional
- **Maven** - Gestión de dependencias
- **Hibernate** - ORM

### Frontend
- **Angular 17** - Framework frontend
- **TypeScript** - Lenguaje de programación
- **Bootstrap 5** - Framework CSS
- **HTML5/CSS3** - Marcado y estilos

## 📁 Estructura del Proyecto

```
aula-crud-completo/
├── 📂 backend/
│ ├── 📂 src/main/java/com/example/aula/
│ │ ├──  controller/AulaController.java
│ │ ├──  entity/Aula.java
│ │ ├──  service/AulaService.java
│ │ ├──  repository/AulaRepository.java
│ │ └──  AulaApplication.java
│ ├── 📂 src/main/resources/
│ │ └──  application.properties
│ └──  pom.xml
├── 📂 frontend/
│ ├── 📂 src/app/
│ │ ├──  components/
│ │ │ ├── aula-list/
│ │ │ └── aula-form/
│ │ ├──  models/aula.ts
│ │ ├──  service/aula-service.ts
│ │ └──  app.routes.ts
│ ├──  package.json
│ └──  angular.json
├──  .gitignore
└──  README.md
```


## ⚡ Instalación y Configuración

### Prerrequisitos
- **Java 21** o superior
- **Node.js 18** o superior
- **MySQL 8.0** o superior
- **Maven 3.6** o superior
- **Angular CLI 17** o superior

### 1. Clonar el repositorio
```bash
git clone https://github.com/JROMEROJAS/AULA-CRUD-COMPLETO.git
cd AULA-CRUD-COMPLETO

```
### 2. Configurar Base de datos
```bash
-- Ejecutar en MySQL Workbench o línea de comandos
CREATE DATABASE aula_db;

```
### 3. Configurar Backend
```bash
cd backend

# Configurar application.properties con tus credenciales MySQL
# Editar: src/main/resources/application.properties

# Instalar dependencias y ejecutar
./mvnw clean install
./mvnw spring-boot:run

#El backend estara disponible en: http://localhost:8081
```
### 4. Configurar Frontend
```bash
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ng serve

#El Frontend estara disponible en: http://localhost:4200
```

## 🎯 Estructura del Proyecto
1. Acceder al sistema: Navegar a http://localhost:4200
2. Ver aulas: Lista principal con todas las aulas
3. Crear aula: Click en "Agregar Nueva Aula"
4. Editar aula: Click en "Editar" en cualquier registro
5. Eliminar aula: Click en "Eliminar" con confirmación
6. Filtrar: Usar selectores de tipo y estado

## 🧪 Ejemplos de datos 
### Estructura de un aula
```bash
{
  "id": 1,
  "codigo": "AULA-101",
  "nsillas": 30,
  "tipo": "TEORIA",
  "estado": "DISPONIBLE"
}
```

### Tipos de aula disponibles 
- TEORIA - Aula para clases teoricas
- LABORATORIO - Aula para prácticas
- MIXTA - Aula para ambos usos

### Estados Posibles
- DISPONIBLE - Aula disponible para uso
- OCUPADA - Aula en uso actualmente
- MANTENIMIENTO - Aula en mantenimiento

## 👨‍💻 Desarrollador 
- Juan Jose Romero Rojas
- Estudiante de Tecnología en Desarrollo de Software - 4° Semestre
- 🔗 GitHub: JROMEROJAS
