const homeIconPath =
  "M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z";
export const HomeIcon = () => {
  return (
    <svg height="24" width="24" fill="white">
      <path d={homeIconPath}></path>
    </svg>
  );
};

const emojiIconPath = "M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z";
export const EmojiIcon = () => {
    return (
        <svg color="white" fill="white" width="24" height="24" viewBox="0 0 24 24">
            <path d={emojiIconPath} ></path>
        </svg>
    );
};

export const MenuIcon = () => {
  return (
    <svg height="24" width="24">
      <line
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="4"
        y2="4"
      ></line>
      <line
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="12"
        y2="12"
      ></line>
      <line
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="20"
        y2="20"
      ></line>
    </svg>
  );
};

export const MoreIcon = () => {
  return (
    <svg fill="white" width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};

const likeIconPath =
  "M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z";
export const LikeIcon = () => {
  return (
    <svg fill="white" width="24" height="24" viewBox="0 0 24 24">
      <path d={likeIconPath}></path>
    </svg>
  );
};

const commenticonPath = "M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z";
export const CommentIcon = () => {
  return (
    <svg color="white" fill="white" width="24" height="24" viewBox="0 0 24 24">
      <path
        d={commenticonPath}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

const shareIconPath =
  "11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334";
export const ShareIcon = () => {
  return (
    <svg color="white" fill="white" width="24" height="24" viewBox="0 0 24 24">
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points={shareIconPath}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

const saveIconPath = "20 21 12 13.44 4 21 4 3 20 3 20 21";
export const SaveIcon = () => {
  return (
    <svg color="white" fill="white" width="24" height="24" viewBox="0 0 24 24">
      <polygon
        fill="none"
        points={saveIconPath}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};
