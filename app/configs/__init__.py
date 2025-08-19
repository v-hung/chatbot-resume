import os
from dotenv import load_dotenv

load_dotenv()

APP_ENV = os.getenv('APP_ENV', 'development').lower()

if APP_ENV == 'production':
	from .production import *
else: # default is development
	from .development import *