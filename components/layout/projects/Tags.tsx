import React, { useState } from 'react';
import styled from 'styled-components';

const TagsContainer = styled.div`
  margin: 1.5em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  max-width: 100%;
`;

const Tag = styled.div`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 0.2em 0.5em;
  font-size: 0.9rem;
  border-radius: 99px;
`;

const MoreButton = styled.button`
  background: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.white};
  padding: 0.2em 0.5em;
  font-size: 0.9rem;
  border-radius: 99px;
  border: none;
`;

const Tags = ({ topics }: { topics: string[] }) => {
  const [more, setMore] = useState(false);

  return (
    <TagsContainer>
      <span>Tags:</span>
      {topics.slice(0, more ? -1 : 3).map((topic) => (
        <Tag key={topic}>{topic}</Tag>
      ))}
      <MoreButton
        type="button"
        onClick={() => setMore((prevState) => !prevState)}>
        {more ? (
          <span>
            Less <i className="bi bi-chevron-double-up" />
          </span>
        ) : (
          <span>
            More <i className="bi bi-chevron-double-down" />
          </span>
        )}
      </MoreButton>
    </TagsContainer>
  );
};

export default Tags;
