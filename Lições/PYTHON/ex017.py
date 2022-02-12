# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo. Calcule e mostre o comprimento da hipotenusa.

from math import hypot

cat_opo = float(input("Digite o comprimento do Cateto Oposto: "))
cat_adj = float(input("Digite o comprimento do Cateto Adjacente: "))
hip = hypot(cat_opo, cat_adj)
print("A hipotenusa vai medir {:.2f}".format(hip))

# OU
# hip = (cat_opo ** 2 + cat_adj ** 2) ** (1/2)
# print("A hipotenusa vai medir {:.2f}".format(hip))
