# Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto.

preco = float(input("Digite o preço, R$"))
preco_desconto = preco - (preco * 0.05)
print("O novo preço com 5% de desconto, foi de {:.2f}".format(preco_desconto))