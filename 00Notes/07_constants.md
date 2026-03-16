# 7

# Constants & Enums

### **What are Constants?**

- A **constants file** stores values reused across the project.
- **Examples:** API URLs, HTTP status codes, role types, fixed messages.

**Benefits:**

- Avoids typos / “magic values”
- Easier maintenance (change in one place)
- Improves code readability

**Setup:**

- Create a `constants.js` file in the `utils` folder.

---

### **Enums**

- Enum = a **fixed set of allowed values**.
- Helps enforce consistency and prevent typos.

**Example – User Roles:**

```js
export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

// Get array of enum values
export const AvailableUserRole = Object.values(UserRolesEnum);
// ["admin", "project_admin", "member"]
```

**Example – Task Status:**

```js
export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export con
```
