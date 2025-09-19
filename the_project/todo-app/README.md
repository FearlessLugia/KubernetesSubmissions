# Todo app

Turn the Dockerfile to an image:

```bash
docker build . -t todo-app
```

Use local images with k3d:

```bash
k3d image import todo-app
```

Create a deployment object with the image:

```bash
kubectl create deployment todo-app --image=todo-app
```

Edit the deployment's `imagePullPolicy` from the default `Always` to `IfNotPresent`:

```bash
kubectl edit deployment todo-app
```

```yaml
containers:
  - image: todo-app
    imagePullPolicy: IfNotPresent
```

Restart the deployment:

```bash
kubectl rollout restart deployment todo-app
```

List all objects of a resource:

```bash
todo-app % kubectl get pods                                                     
NAME                          READY   STATUS    RESTARTS   AGE
todo-app-6c57b7d764-4m5ls     1/1     Running   0          3s
```

See the output:

```bash
 todo-app % kubectl logs -f todo-app-6c57b7d764-4m5ls

> todo-app@1.0.0 start
> node index.js

Server started in port 3456
```