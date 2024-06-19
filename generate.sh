module=$1

nest g module $module modules
nest g service $module modules
nest g controller $module modules