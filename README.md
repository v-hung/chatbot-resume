python -m venv venv

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

.\venv\Scripts\Activate.ps1

pip install -r requirements.txt

pip freeze > requirements.txt
