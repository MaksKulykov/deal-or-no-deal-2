module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    boxShadow: {
        sm: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
        lg: '0 8px 4px -4px rgba(0, 0, 0, 0.3)'
    },
    colors: {
        boxBodyPr: '#762c2c',
        boxBodySec: '#ff0303',
        boxBodyAfterPr: '#ffffff',
        boxBodyAfterSec: '#ffefa0',
        boxValPr: '#ffd700',
        boxValSec: '#b8860b',
        boxLid: '#cc231e',
        buttonPr: '#696969',
        buttonSec: '#000000'
    },
    extend: {
        keyframes: {
            hideBox: {
                '0%': { transform: 'scale(1)' },
                '100%': { transform: 'scale(0)' }
            },
            boxBodyAnim: {
                '0%': { transform: 'translate3d(0%, 0%, 0) rotate(0deg)' },
                '25%': { transform: 'translate3d(0%, 25%, 0) rotate(20deg)' },
                '50%': { transform: 'translate3d(0%, -15%, 0) rotate(0deg)' },
                '70%': { transform: 'translate3d(0%, 0%, 0) rotate(0deg)' }
            },
            boxValAnim: {
                '0%': { transform: 'translateY(0%) opacity: 0' },
                '100%': { transform: 'translateY(-125%) opacity: 1 z-index: 0' }
            },
            boxLidAnim: {
                '0%': {},
                '42%': { transform: 'translate3d(-50%, 0%, 0) rotate(0deg)' },
                '60%': { transform: 'translate3d(-85%, -230%, 0) rotate(-25deg)' },
                '90%': { transform: 'translate3d(-119%, 225%, 0) rotate(-70deg)' },
                '100%': { transform: 'translate3d(-119%, 225%, 0) rotate(-70deg)' }
            },
            rightMoneyBoxAnim: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(120%)' }
            },
            leftMoneyBoxAnim: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-120%)' }
            }
        },
        animation: {
            hideBox: 'hideBox 1s ease-out',
            boxBodyAnim: 'boxBodyAnim 1s 0.5s forwards ease-in-out',
            boxValAnim: 'boxValAnim 1s 1.5s forwards ease-in-out',
            boxLidAnim: 'boxLidAnim 1s 0.5s forwards ease-in-out',
            rightMoneyBoxAnim: 'rightMoneyBoxAnim 2s ease-in-out forwards',
            leftMoneyBoxAnim: 'leftMoneyBoxAnim 2s ease-in-out forwards',
        }
    },
  },
  plugins: [],
}
