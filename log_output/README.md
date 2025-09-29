# Log output app

Turn the Dockerfile to an image:

```bash
docker build . -t log-output
```

Use local images with k3d:

```bash
k3d image import log-output
```

Apply the deployment with `apply` command using declarative configuration with YAML:

```bash
kubectl apply -f manifests/deployment.yaml
```

Edit the deployment's `imagePullPolicy` from the default `Always` to `IfNotPresent`:

```bash
kubectl edit deployment log-output-dep
```

```yaml
containers:
  - image: log-output
    imagePullPolicy: IfNotPresent
```

Restart the deployment:

```bash
kubectl rollout restart deployment log-output-dep
```

List all objects of a resource:

```bash
log_output % kubectl get pods                                                     
NAME                               READY   STATUS    RESTARTS   AGE
log-output-dep-5b758cb5d7-phrhw    1/1     Running   0          3s
```

See the output:

```bash
log_output % kubectl logs -f log-output-dep-5b758cb5d7-phrhw 

> app1@1.0.0 start
> node index.js

2025-09-29T04:36:34.139Z: 83acc7ff-aafc-4ae3-a2ed-fc3847832fb8
2025-09-29T04:36:39.150Z: ea566f35-16e4-4f81-b660-c885bda41eab
2025-09-29T04:36:44.154Z: 5fb1c9cb-dda6-46e3-8988-ec0b43dfce76
2025-09-29T04:36:49.160Z: 9b8fdd15-c755-4c24-9fc1-3da652bd48f9
```