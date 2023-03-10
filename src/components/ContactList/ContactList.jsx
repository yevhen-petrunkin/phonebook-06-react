import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { List } from './ContactList.styled';
import { useMedia } from 'hooks/useMedia';
import { Contact } from './Contact';
import { CustomImage } from 'components/CustomImage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cat from 'images/cat-01.jpg';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const { isMedium } = useMedia();

  let flexDir = 'column';
  let flexWidth = '100%';

  if (isMedium) {
    flexDir = 'row';
    flexWidth = '50%';
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <Typography variant="body1" component="h3">
          Wait, please. We are loading contacts.
        </Typography>
      )}

      {error && (
        <Typography variant="body1" component="h3">
          {error}
        </Typography>
      )}

      {!isLoading && visibleContacts.length === 0 && (
        <Typography variant="body1" component="h3">
          Oops... No contacts found.
        </Typography>
      )}

      {!isLoading && visibleContacts.length !== 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: flexDir,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <CustomImage
            imgWidth={flexWidth}
            imgHeight="45vh"
            imgUrl={cat}
            imgCaption="Contacts"
          />
          <Box width={flexWidth} height="45vh" sx={{ overflow: 'hidden' }}>
            <List>
              {visibleContacts?.map(contact => {
                return <Contact key={contact.name} contact={contact} />;
              })}
            </List>
          </Box>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
