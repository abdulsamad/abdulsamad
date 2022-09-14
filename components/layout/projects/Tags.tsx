import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const TagsContainer = styled.div`
  margin: 1.5em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
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
  height: 1.8em;
  font-size: 0.9rem;
  border-radius: 99px;
  border: none;
`;

const variants: Variants = {
  start: {
    transformOrigin: 'top',
    scale: 0,
  },
  mid: {
    scale: 1,
  },
  end: {
    scale: 0,
  },
};

const Tags = ({ topics }: { topics: string[] }) => {
  const [more, setMore] = useState(false);

  return (
    <TagsContainer>
      <AnimatePresence>
        {topics.slice(0, more ? -1 : 3).map((topic) => (
          <motion.div
            key={topic}
            variants={variants}
            initial="start"
            animate="mid"
            exit="end">
            <Tag>{topic}</Tag>
          </motion.div>
        ))}
      </AnimatePresence>
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
