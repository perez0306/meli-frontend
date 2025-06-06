import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const fullScreen = useMediaQuery('(max-width: 900px)');

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          style: !fullScreen
            ? {
                borderRadius: 20,
                maxWidth: 900,
                padding: 40,
                margin: '32px auto',
                boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
              }
            : {
                borderRadius: 0,
                width: '100vw',
                minHeight: '100vh',
                padding: 0,
              },
        },
        backdrop: {
          style: { backgroundColor: 'rgba(0,0,0,0.12)' },
        },
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10,
        }}
        aria-label="Cerrar"
      >
        <CloseIcon sx={{ color: '#2868C7', fontSize: 24 }} />
      </button>
      {children}
    </Dialog>
  );
};

export default Modal;
