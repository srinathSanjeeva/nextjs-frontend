---

## Next.js Frontend with Docker

This project is a Next.js frontend application that fetches data from a backend service and falls back to a placeholder response if the backend is unavailable. The application can be run locally or inside a Docker container. Additionally, it supports configuring the backend URL through environment variables.

### Prerequisites

Before running this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/) (Optional for multi-container environments)

---

### Getting Started

#### 1. Clone the Repository

```bash
git clone https://github.com/srinathSanjeeva/nextjs-frontend.git
cd nextjs-frontend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Running Locally

To run the app locally with a specific backend URL, create an `.env.local` file:

```bash
# .env.local
NEXT_PUBLIC_BACKEND_URL=http://your-backend-url
```

Now, start the development server:

```bash
npm run dev
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

---

### Running in Docker

#### 1. Build the Docker Image

To build the Docker image, run the following command:

```bash
docker build -t docker-username/nextjs-frontend .
```

#### 2. Run the Docker Container

You can run the Docker container on port `4000` and pass the backend URL as an environment variable:

```bash
docker run -p 4000:3000 -e NEXT_PUBLIC_BACKEND_URL=http://your-backend-url docker-username/nextjs-frontend
```

The app will be accessible at [http://localhost:4000](http://localhost:4000).

---

### Updating the Docker Image

If you need to update the Docker image after making changes, follow these steps:

#### 1. Rebuild the Docker Image

```bash
docker build -t docker-username/nextjs-frontend .
```

#### 2. Push the Updated Image to Docker Hub

```bash
docker push docker-username/nextjs-frontend
```

#### 3. Optionally Tag the Image with a New Version

If you want to tag the image with a new version (e.g., `v2`), use:

```bash
docker build -t docker-username/nextjs-frontend:v2 .
docker push docker-username/nextjs-frontend:v2
```

---

### Environment Variables

The following environment variables can be configured:

- `NEXT_PUBLIC_BACKEND_URL`: The URL for the backend service. It defaults to a placeholder if not provided.

---

### Running with Docker Compose (Optional)

You can also manage your containers and environment variables using Docker Compose. Create a `docker-compose.yml` file as shown below:

```yaml
version: '3'
services:
  nextjs-app:
    build: .
    ports:
      - '4000:3000'
    environment:
      - NEXT_PUBLIC_BACKEND_URL=http://your-backend-url
```

To start the app with Docker Compose:

```bash
docker-compose up
```

---

### License

This project is licensed under the MIT License.

---

### Contributing

Feel free to open issues or submit pull requests for any improvements.

---

This `README.md` provides a complete guide for setting up and running the project, both locally and in Docker. Let me know if you'd like to add or modify any sections!
