#  Crie um programa que leia o nome completo de uma pessoa e mostre:
# – O nome com todas as letras maiúsculas e minúsculas.
# – Quantas letras ao todo (sem considerar espaços).
# – Quantas letras tem o primeiro nome.

nome = str(input("Digite seu nome completo: "))
print("Maiúsculas: {}".format(nome.upper()))
print("Minúsculas: {}".format(nome.lower()))
print("Seu nome tem o total de {} letras".format(len(nome) - nome.count(' ')))
print("Seu primeiro nome tem {} letras".format(nome.find(' ')))