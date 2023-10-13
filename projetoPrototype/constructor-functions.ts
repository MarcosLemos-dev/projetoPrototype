function Veiculo(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }
  
  const veiculoPrototype = {
    modelo: 'esportivo',
    marca: 'palio',
    cor: 'vermelho',
    numeroRodas: 4,
  
    fullveiculo() {
      return `${this.modelo} ${this.marca}${this.cor} ${this.numeroRodas}`;
    },
  };
  
  Veiculo.prototype = Object.create(veiculoPrototype);
  Veiculo.prototype.constructor = Veiculo;
  
  function SubPerson(modelo, marca, cor, numeroRodas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.fromSubClass = 'OIE';
  }
  
  SubPerson.prototype = Object.create(Veiculo.prototype);
  SubPerson.prototype.constructor = SubPerson;
  
  const veiculo01 = new Veiculo('popular', 'fiat', 'cinza', 4);
  console.log(veiculo01);
  console.log(veiculo01.fullveiculo());
  
  const veiculo02 = new Veiculo('popular', 'fiat', 'preto', 4);
  console.log(veiculo02);
  console.log(veiculo02.fullveiculo());