import styles from './index.module.css';
import Image from 'next/image';

const bancosSinInteres = [
  { name: 'Bancolombia', cuotas: 3, icon: '/icons/bancolombia.svg' },
  { name: 'AV Villas', cuotas: 3, icon: '/icons/avvillas.svg' },
  { name: 'Banco de Bogotá', cuotas: 3, icon: '/icons/bancobogota.svg' },
  { name: 'BBVA', cuotas: 3, icon: '/icons/bbva.svg' },
  { name: 'Banco Popular', cuotas: 3, icon: '/icons/bancopopular.svg' },
  { name: 'Itaú', cuotas: 3, icon: '/icons/bancoitau.svg' },
  { name: 'Banco de Occidente', cuotas: 3, icon: '/icons/bancooccidente.svg' },
  { name: 'Davivienda', cuotas: 3, icon: '/icons/davivienda.svg' },
  { name: 'Éxito', cuotas: 3, icon: '/icons/exito.svg' },
  { name: 'Scotiabank Colpatria', cuotas: 3, icon: '/icons/colpatria.svg' },
  { name: 'RappiCard', cuotas: 3, icon: '/icons/rappi.svg' },
  { name: 'NU', cuotas: 3, icon: '/icons/nubank.svg' },
];

const tarjetasConInteres = [
  { name: 'Codensa', cuotas: 48, icon: '/icons/codensa.svg' },
  { name: 'Visa', cuotas: 36, icon: '/icons/visa.svg' },
  { name: 'Mastercard', cuotas: 36, icon: '/icons/mastercard.svg' },
  { name: 'American Express', cuotas: 36, icon: '/icons/american.svg' },
  { name: 'Diners Club', cuotas: 36, icon: '/icons/dinners.svg' },
];

const PaymentMethodsModal = () => (
  <div className={styles.modalContainer}>
    <h2 className={styles.title}>Medios de pago para este producto</h2>
    <div className={styles.infoBox}>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQFtaMOUetLi9yNY92MtbLwJqoO1kDS2jHB4oRMBehRo1PzKGg2_TAbiIUxC1hgpNnA4&usqp=CAU"
        alt="payment-methods"
        title="payment-methods"
        width={24}
        height={24}
      />
      <span>
        Pagar con <b>Mercado Pago</b> es elegir cualquiera de estos medios. Es rápido, seguro y no
        tiene costo adicional.
      </span>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
      <h3 className={styles.subtitle}>Tarjetas de crédito</h3>
      <span className={styles.instant}>Acreditación instantánea.</span>
      <p className={styles.greenText}>Hasta 3 cuotas con 0% interés con estos bancos</p>
      <div className={styles.banksGrid}>
        {bancosSinInteres.map(banco => (
          <div key={banco.name} className={styles.bankItem}>
            <div className={styles.logoContainer}>
              <Image
                src={banco.icon}
                alt={banco.name}
                title={banco.name}
                fill
                className={styles.cardLogo}
                sizes="48px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className={styles.cuotas}>{banco.cuotas} cuotas</span>
          </div>
        ))}
      </div>
      <p className={styles.orText}>O hasta 48 cuotas con interés</p>
      <div className={styles.cardsGrid}>
        {tarjetasConInteres.map(tarjeta => (
          <div key={tarjeta.name} className={styles.cardItem}>
            <div className={styles.logoContainer}>
              <Image
                src={tarjeta.icon}
                alt={tarjeta.name}
                title={tarjeta.name}
                fill
                className={styles.cardLogo}
                sizes="48px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className={styles.cuotas}>{tarjeta.cuotas} cuotas</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PaymentMethodsModal;
