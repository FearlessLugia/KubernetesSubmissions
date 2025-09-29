# Todo app

Turn the Dockerfile to an image:

```bash
docker build . -t todo-app
```

Use local images with k3d:

```bash
k3d image import todo-app
```

Apply the deployment with `apply` command using declarative configuration with YAML:

```bash
kubectl apply -f manifests/deployment.yaml
```

Edit the deployment's `imagePullPolicy` from the default `Always` to `IfNotPresent`:

```bash
kubectl edit deployment todo-app-dep
```

```yaml
containers:
  - image: todo-app-dep
    imagePullPolicy: IfNotPresent
```

Restart the deployment:

```bash
kubectl rollout restart deployment todo-app-dep
```

List all objects of a resource:

```bash
todo-app % kubectl get pods                                                     
NAME                              READY   STATUS    RESTARTS   AGE
todo-app-dep-845b7f6d4c-jsgpg     1/1     Running   0          3s
```

See the output:

```bash
 todo-app % kubectl logs -f todo-app-dep-845b7f6d4c-jsgpg

> todo-app@1.0.0 start
> node index.js

Server started in port 3456
```