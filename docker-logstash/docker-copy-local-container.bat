@echo off
SET imageName=opensearchproject/logstash-oss-with-opensearch-output-plugin:7.16.2
SET containerName=logstash
SET localFilePath=C:\Users\CSINJHKA\Desktop\docker-logstash\company-uk-search.conf
SET containerFilePath=/usr/share/logstash/company-uk-search.conf
SET localScriptsFolderPath=C:\Users\CSINJHKA\Desktop\docker-logstash\files
SET containerScriptsFolderPath=/usr/share/logstash/files

for /f %%i in ('docker inspect --format="{{.Id}}" %containerName%') do set containerId=%%i
echo docker containerId : %containerId%
If "%containerId%" == "" (
	echo "No Container running"
) ELSE (
	docker exec %containerId% rm -rf %containerFilePath%
	docker cp %localFilePath% %containerId%:%containerFilePath%
	docker cp %localScriptsFolderPath% %containerId%:%containerScriptsFolderPath%
)
echo Done !!