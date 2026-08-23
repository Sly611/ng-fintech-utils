# 🇳🇬 NG Fintech Utils API

A lightweight, blazing-fast, and free REST API for Nigerian fintech developers. Easily access structured data for commercial banks, NUBAN/sorting codes, and USSD strings without setting up heavy database infrastructure.

## 🚀 Live Endpoint

- **Base URL:** `https://ng-fintech-utils.vercel.app/api`

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
