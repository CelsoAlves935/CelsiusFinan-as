import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

// Nossos dados fictícios para testar a interface
const mockTransacoes = [
  { id: '1', titulo: 'Supermercado', valor: -250.50, data: '15 Jun', tipo: 'despesa' },
  { id: '2', titulo: 'Salário', valor: 4500.00, data: '05 Jun', tipo: 'receita' },
  { id: '3', titulo: 'Setup (Teclado)', valor: -350.00, data: '02 Jun', tipo: 'despesa' },
  { id: '4', titulo: 'Conta de Luz', valor: -120.00, data: '01 Jun', tipo: 'despesa' },
];

export default function Dashboard() {

  // Função para renderizar cada item da nossa lista de transações
  const renderItem = ({ item }) => (
    <View style={styles.transacaoCard}>
      <View>
        <Text style={styles.transacaoTitulo}>{item.titulo}</Text>
        <Text style={styles.transacaoData}>{item.data}</Text>
      </View>
      <Text style={[
        styles.transacaoValor,
        item.tipo === 'despesa' ? styles.valorNegativo : styles.valorPositivo
      ]}>
        {item.tipo === 'despesa' ? '-' : '+'} R$ {Math.abs(item.valor).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.saudacao}>Olá, Desenvolvedor!</Text>
        <Text style={styles.subtitulo}>Bem-vindo ao seu controle financeiro</Text>
      </View>

      {/* Card Principal de Saldo */}
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoLabel}>Saldo Atual</Text>
        <Text style={styles.saldoValor}>R$ 3.779,50</Text>
      </View>

      {/* Espaço reservado para o Gráfico futuro */}
      <View style={styles.graficoPlaceholder}>
        <Text style={styles.graficoTexto}>[ O Gráfico de Anel entrará aqui ]</Text>
      </View>

      {/* Lista de Últimas Transações */}
      <View style={styles.listaContainer}>
        <Text style={styles.secaoTitulo}>Últimas Transações</Text>
        <FlatList
          data={mockTransacoes}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

// Organização dos Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA', // Fundo cinza bem claro para destacar os cards
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  saudacao: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
  },
  saldoContainer: {
    backgroundColor: '#2D3748', // Azul escuro elegante
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  saldoLabel: {
    color: '#A0AEC0',
    fontSize: 14,
    marginBottom: 5,
  },
  saldoValor: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  graficoPlaceholder: {
    height: 120,
    backgroundColor: '#E2E8F0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderStyle: 'dashed',
  },
  graficoTexto: {
    color: '#718096',
  },
  listaContainer: {
    flex: 1, // Faz a lista ocupar o resto da tela
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  transacaoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transacaoTitulo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  transacaoData: {
    fontSize: 12,
    color: '#A0AEC0',
    marginTop: 4,
  },
  transacaoValor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valorPositivo: {
    color: '#38A169', // Verde
  },
  valorNegativo: {
    color: '#E53E3E', // Vermelho
  },
});