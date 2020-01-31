## WS del Clima hecha en TypeScript
---

### **Instalaciones necesarias**
Node
https://nodejs.org/es/

TypeScript
http://www.typescriptlang.org/

___
### **Ejecutar**
```
node install
```
___
### **Ejemplos**

**input**
{
	"city" : "new york"
}

**output**
{
    "ok": true,
    "ciudad": "new york",
    "temperatura": 2
}

**input**
{
	"city" : "cordoba argentina"
}

**output**
{
    "ok": true,
    "ciudad": "cordoba argentina",
    "temperatura": 26
}

**input**
{
	"city" : "anywhere"
}

**output**
{
    "ok": false,
    "ciudad": "anywhere",
    "error": "No se encontro la cuidad anywhere"
}