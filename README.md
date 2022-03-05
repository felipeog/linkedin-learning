# LinkedIn Learning

## Defining workspaces

1 - Create course folder

```
mkdir courses/<course_name>/<exercise_number>
cd courses/<course_name>/<exercise_number>
yarn init -yp
```

2 - Set the workspace name on the course's `package.json`

```json
{
  "name": "<course_name>-<exercise_number>",
  ...
}
```

3 - Add the course folder path to the root `package.json`

```json
{
  ...
  "workspaces": [
    ...
    "courses/<course_name>/*"
  ]
}
```

## Running commands in the context of workspaces

```
yarn workspace <workspace_name> <command>
```
