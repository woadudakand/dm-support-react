import { List } from 'antd';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { BorderLessHeading } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { NewMemberStyle } from '../../Style';
import teamData from '../../../../demoData/teamMembers.json';
import { imageUrl } from '../../../../components/utilities/image';

const moreContent = (
  <>
    <NavLink to="#">
      <UilPrint />
      <span>Printer</span>
    </NavLink>
    <NavLink to="#">
      <UilBookOpen />
      <span>PDF</span>
    </NavLink>
    <NavLink to="#">
      <UilFileAlt />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink to="#">
      <UilTimes />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <UilFile />
      <span>CSV</span>
    </NavLink>
  </>
);

function NewMember() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const team = teamData.slice(0, 5);
    if (!unmounted) {
      setData(team);
    }

    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, []);

  const handleActive = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  return (
    <BorderLessHeading>
      <Cards more={moreContent} title="Team Members" size="large">
        <NewMemberStyle>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  className="dm-status-online"
                  avatar={<img src={imageUrl(`${item.img}`)} alt="ninjadash Team" />}
                  title={<Link to="#">{item.name}</Link>}
                  description="online"
                />
                <Button onClick={handleActive} type="primary">
                  Follow
                </Button>
              </List.Item>
            )}
          />
        </NewMemberStyle>
      </Cards>
    </BorderLessHeading>
  );
}

export default NewMember;
