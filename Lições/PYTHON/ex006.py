# Crie um algoritmo que leia um número e mostre o seu dobro, triplo e raiz quadrada.

from math import sqrt

num = int(input("Digite um número "))
print("O dobro é {}".format(num*2))
print("O triplo é {}".format(num*3))
print("A raiz quadrada é {}".format(sqrt(num)))