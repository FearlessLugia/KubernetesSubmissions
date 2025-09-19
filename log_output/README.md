# Log output app

Use local images with k3d:
```bash
k3d image import log-output  
```

Create a deployment(opens in a new tab) object with the image: 
```bash
kubectl create deployment log-output --image=fearlesslugia/log-output
```

List all objects of a resource: 
```bash
log_output % kubectl get pods                                                     
NAME                         READY   STATUS    RESTARTS   AGE
log-output-5dfbd76df-skp2j   1/1     Running   0          6m17s
```

See the output:
```bash
log_output % kubectl logs -f log-output-5dfbd76df-skp2j 

> app1@1.0.0 start
> node index.js

2025-09-19T05:47:12.373Z: 8a013200-3f39-49ad-84c4-26ad28963e62
2025-09-19T05:47:17.387Z: d3abcf56-d7ef-4e30-a85e-bd958e21ab2c
2025-09-19T05:47:22.391Z: 5222cb6b-6b19-4c61-a516-755b03ed1c5c
2025-09-19T05:47:27.401Z: 22029a15-64a2-4452-aa14-48b30e3c5f2b
2025-09-19T05:47:32.405Z: eafab796-b689-4a27-93b3-03559c603679
2025-09-19T05:47:37.417Z: 5b5ce3ca-f1bb-4313-98d4-44c9e7494d5e
2025-09-19T05:47:42.425Z: 24d00eb9-75bf-40b9-b5df-73a84b587851
2025-09-19T05:47:47.430Z: 9666c66d-16bc-4c8c-8422-2b22c809d522
2025-09-19T05:47:52.439Z: 0126b2c6-3ff2-44dc-bcc0-86c66dd91ba1
2025-09-19T05:47:57.458Z: 523c7a37-40d6-471c-8377-d69b585e1aa2
2025-09-19T05:48:02.468Z: da63ae9e-80ea-45f9-8a61-dbb9702b0553
```