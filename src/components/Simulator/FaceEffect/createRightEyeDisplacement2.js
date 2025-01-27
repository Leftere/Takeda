import * as PIXI from 'pixi.js';

const createRightEyeDisplacement2 = (resources, rightEye) => {
  // const sprite = PIXI.Sprite.from('/maps/old/EyeR_extracted2.png');
  const sprite = new PIXI.Sprite(resources.eyer6.texture);

  // const blur = new PIXI.filters.BlurFilter(8);

  const filter = new PIXI.filters.DisplacementFilter(sprite, 80);

  // filter.blendMode = PIXI.BLEND_MODES.HARD_LIGHT;
  // blur.blendMode = PIXI.BLEND_MODES.HARD_LIGHT;
  // const jawRightTop = jawOutline[16];
  // const rightEyeFirst = rightEye[0];

  sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;

  // const eyeToJawWidth = jawRightTop.x - rightEyeFirst.x;

  // const eyeToJawCenter = rightEyeFirst.x + eyeToJawWidth;

  // const eyeHeight = rightEye[4].y - rightEye[2].y;

  const position = {x: rightEye[5].x, y: rightEye[4].y + 10};

  sprite.anchor.set(0.5, 0.5);
  sprite.position.set(position.x, position.y);

  sprite.width = (rightEye[3].x - rightEye[0].x) * 3; // (rightMouth.x - leftMouth.x) * 2;
  sprite.height = (rightEye[3].x - rightEye[0].x) * 3;

  // sprite.filters = [blur];

  return {filter, sprite};
};

export default createRightEyeDisplacement2;
