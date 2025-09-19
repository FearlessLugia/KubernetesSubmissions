# Log output app

Turn the Dockerfile to an image:

```bash
docker build . -t log-output
```

Use local images with k3d:

```bash
k3d image import log-output
```

Create a deployment object with the image:

```bash
kubectl create deployment log-output --image=log-output
```

Edit the deployment's `imagePullPolicy` from the default `Always` to `IfNotPresent`:

```bash
kubectl edit deployment log-output
```

```yaml
containers:
  - image: log-output
    imagePullPolicy: IfNotPresent
```

Restart the deployment:

```bash
kubectl rollout restart deployment log-output
```

List all objects of a resource:

```bash
log_output % kubectl get pods                                                     
NAME                          READY   STATUS    RESTARTS   AGE
log-output-69d7fbd44b-qns9q   1/1     Running   0          3s
```

See the output:

```bash
log_output % kubectl logs -f log-output-69d7fbd44b-qns9q

> app1@1.0.0 start
> node index.js

2025-09-19T19:48:34.343Z: a28594b5-37ef-4523-bdca-c23e7f3a408e
2025-09-19T19:48:39.351Z: 30695cca-3940-43da-beb0-b802b7a5ca41
2025-09-19T19:48:44.356Z: f05f7962-d41c-43a5-bff7-5a8545e7fed5
2025-09-19T19:48:49.364Z: cb3841ce-575e-4fa1-9212-7a999f6585cc
2025-09-19T19:48:54.374Z: ecd1cf39-da74-4c42-8adc-4cc1a8c171da
2025-09-19T19:48:59.377Z: 1f18adf9-ab6a-41c0-8a17-0de7294f2559
2025-09-19T19:49:04.386Z: 7d6e08c9-40f9-4225-8375-b7091f86ab7b
2025-09-19T19:49:09.396Z: e3272944-1fd9-40a2-a4a8-dd160e685405
2025-09-19T19:49:14.403Z: 4b246d9f-cb21-4a26-a128-37ff5c0bd23a
```