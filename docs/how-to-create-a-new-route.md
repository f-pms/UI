# How to crete a new route for your page

### Step 1: Create new path constant

Inside the `src/constants/path` directory, update a new **Path** and **PATH_LABEL** for your page. For example:

```typescript
export enum Path {
    ...
    NEW_PATH: '/new-path'
}

export const PATH_LABEL: Record<Path, string> = {
    ...
    [Path.NEW_PATH]: 'New Path',
};

```

### Step 2: Create new page

Inside the `src/pages` directory, create new folder for your page. For example, let's call it **NewPage**.

### Step 3: Update routes

Inside the `src/router/routes` directory, update privateRoles or publicRoutes which match with your route. When creating a public route, use the `isRestricted` tag if the page is restricted. For example:

```typescript
// publicRoutes.tsx
export const publicRoutes: (PublicRouteObject & RouteObject)[] = [
   ...
   {
   path: Path.NEW_PAGE,
   element: <NewPage />,
   isRestricted: true,
   },
]
```

### Step 4: Update sidebar

Inside the `src/layouts/partials/Sidebar/helpers/items`, update the `SIDEBAR_ITEMS` and their icon. For example:

```typescript
//items.tsx
export const SIDEBAR_ITEMS: SidebarItem[] = [
   ...
   {
       name: PATH_LABEL[Path.NEW_PAGE],
       icon: <CottageOutlinedIcon sx={{ fontSize: '22px' }} />,
       path: Path.NEW_PAGE,
   },
 ]
```
