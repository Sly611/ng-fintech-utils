# 🇳🇬 NG Fintech Utils API

A lightweight, blazing-fast, and free REST API for Nigerian fintech developers. Easily access structured data for commercial banks, NUBAN/sorting codes, and USSD strings without setting up heavy database infrastructure.

---

## 🚀 Live Endpoint

- **Base URL:** `https://ng-fintech-utils.vercel.app/api`

---

## 🏁 Getting Started

You don't need any API keys or authentication headers to get started. You can query the endpoints directly from any frontend framework (React, Next.js, Vue) or backend script using standard `fetch()`.

### Example (JavaScript / Frontend):

```javascript
async function fetchBanks() {
  try {
    const response = await fetch(
      "[https://your-vercel-project.vercel.app/api/banks](https://your-vercel-project.vercel.app/api/banks)",
    );
    const result = await response.json();

    if (result.success) {
      console.log("Banks loaded:", result.data);
    }
  } catch (error) {
    console.error("Failed to fetch banks:", error);
  }
}
```

---

## 📚 API Endpoints

### 1. Get All Banks

Retrieve a list of all supported financial institutions.

- **URL:** `/api/banks`
- **Method:** `GET`
- **Response Example:**

```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "name": "Access Bank",
      "slug": "access-bank",
      "code": "044",
      "ussd": "*901#",
      "type": "commercial"
    }
  ]
}
```

### 2. Get Single Bank (By Slug or Code)

Lookup a specific bank using its URL-friendly slug or 3-digit code.

- **URL:** `/api/banks/{slug_or_code}`
- **Method:** `GET`
- **Example:** `/api/banks/access-bank` or `/api/banks/044`
- **Response Example:**

```json
{
  "success": true,
  "data": {
    "name": "Access Bank",
    "slug": "access-bank",
    "code": "044",
    "ussd": "*901#",
    "type": "commercial"
  }
}
```

---

## 🔒 Rate Limiting

To ensure high availability and prevent abuse on the free tier, this API is rate-limited to **20 requests per minute per IP address** using Upstash Redis. Exceeding this limit will return a `429 Too Many Requests` response.

---

## 🐍 Python Package Alternative

Are you building in Python? Check out our official companion package:
👉 [ng-fintech-utils on PyPI](https://pypi.org/project/ng-fintech-utils/) (Install via `pip install ng_fintech_utils`)

---

## 💡 Tech Stack

- **Framework:** Next.js (App Router / Route Handlers)
- **Hosting:** Vercel (Edge Serverless Functions)
- **Security:** Upstash Redis (`@upstash/ratelimit`)
