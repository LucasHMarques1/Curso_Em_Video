# Faça um programa que leia três números e mostre qual é o maior e qual é o menor.

num1 = int(input("Primeiro Valor: "))
num2 = int(input("Segundo Valor: "))
num3 = int(input("Terceiro Valor: "))

# Verificando quem é MENOR
menor = num1
if num2 < num1 and num2 < num3:
    menor = num2
if num3 < num1 and num3 < num2:
    menor = num3

# Verificando quem é MAIOR
maior = num1
if num2 > num1 and num2 > num3:
    maior = num2
if num3 > num1 and num3 > num2:
    maior = num3

print("O MAIOR valor digitado foi {}".format(maior))
print("O MENOR valor digitado foi {}".format(menor))
