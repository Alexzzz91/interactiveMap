k8s-run:
	kubectl apply --recursive=true -f k8s.old

k8s-status:
	kubectl -n abelikov describe service/map
	kubectl -n abelikov get pod -o wide --selector=app=map-app
