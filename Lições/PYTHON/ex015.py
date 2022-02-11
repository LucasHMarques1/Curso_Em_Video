# Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.

km_percorrido = float(input("Digite o total de Km percorrido: "))
dias_aluguel = int(input("Digite a quantidade de dias que foi alugado: "))

preco_final = ((km_percorrido * 0.15) + (dias_aluguel * 60))

print("O preço final a pagar é {:.2f}".format(preco_final))