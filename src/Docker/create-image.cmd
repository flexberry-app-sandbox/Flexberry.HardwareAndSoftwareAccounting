docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hardware_and_software_accounting/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t hardware_and_software_accounting/app ../..
